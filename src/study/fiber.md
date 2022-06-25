<!--
 * @Author: Chendapeng
 * @Date: 2021-08-04 09:31:01
 * @LastEditors: Chendapeng
 * @LastEditTime: 2021-08-24 10:53:40
 * @Description:  the first 技术分享
-->

# 浅谈我对react fiber的理解

## 前置知识

### 浏览器渲染相关

- 大概过程
  - 执行一个宏任务（首次执行的主代码块 script 或者任务队列中的回调函数）
  - 执行过程中如果遇到微任务，就将它添加到微任务的任务队列中
  - 宏任务执行完毕后，立即执行当前微任务队列中的所有任务（依次执行）
  - JS引擎线程挂起，GUI线程执行渲染
  - GUI线程渲染完毕后挂起，JS引擎线程执行任务队列中的下一个宏任务

> 主线程运行js代码时，会生成执行栈，能处理嵌套的函数，入栈出栈等操作

-  浏览器一帧都会干些什么
接受输入事件
执行事件回调
开始一帧
执行 RAF (RequestAnimationFrame)
页面布局，样式计算
绘制渲染
执行 RIC (RequestIdelCallback)

第七步的 RIC 事件不是每一帧结束都会执行，只有在一帧的 16.6ms 中做完了前面 6 件事儿且还有剩余时间，才会执行。如果一帧执行结束后还有时间执行 RIC 事件，那么下一帧需要在事件执行结束才能继续渲染，所以 RIC 执行不要超过 30ms，如果长时间不将控制权交还给浏览器，会影响下一帧的渲染，导致页面出现卡顿和事件响应不及时

### 两个核心api(requestAnimationFrame/requestIdleCallback)

### requestAnimationFrame
浏览器提供的绘制动画的api，要求浏览器在下一次重绘之前调用指定的回调函数来更新动画，

### requestIdleCallback
window.requestIdleCallback()方法将利用浏览器的空闲时段调用的函数排队。这使开发者能够在主事件循环上执行后台和低优先级工作，而不会影响延迟关键事件，如动画和输入响应。函数一般会按先进先调用的顺序执行，然而，
```ts
// 开启调用
var handle = window.requestIdleCallback(callback[,options])
// 结束调用
window.cancelIdleCallback(handle)

requestIdleCallback((deadline)=>{
  console.log(deadline.timeRemaining(), deadline.didTimeout)
});
```

用法示例
```ts
requestIdleCallback((deadline) => {
// deadline 有两个参数
  // timeRemaining(): 当前帧还剩下多少时间
  // didTimeout: 是否超时
  // 另外 requestIdleCallback 后如果跟上第二个参数 {timeout: ...} 
  // 则会强制浏览器在当前帧执行完后执行。
 if (deadline.timeRemaining() > 0) {
   // TODO
 } else {
  requestIdleCallback(otherTasks);
 }
});

// 用法示例
var tasksNum = 100
requestIdleCallback(unImportWork)
function unImportWork(deadline) {
  while (deadline.timeRemaining() && tasksNum > 0) {
    console.log(`执行了${100 - tasksNum + 1}个任务`)
    tasksNum--
  }
  if (tasksNum > 0) { // 在未来的帧中继续执行
    requestIdleCallback(unImportWork)
  }
}
```

微前端框架*qiankun* 在介绍自己特性的时候，提到过一个：在浏览器空闲时间预加载未打开的微应用资源，加速微应用打开速度，里面的源码就是利用这个api实践的，
```ts
/**
 * prefetch assets, do nothing while in mobile network
 * @param entry
 * @param opts
 */
function prefetch(entry: Entry, opts?: ImportEntryOpts): void {
  if (!navigator.onLine || isSlowNetwork) {
    // Don't prefetch if in a slow network or offline
    return;
  }
  requestIdleCallback(async () => {
    const { getExternalScripts, getExternalStyleSheets } = await importEntry(entry, opts);
    requestIdleCallback(getExternalStyleSheets); // css
    requestIdleCallback(getExternalScripts); // js
  });
}
```

RIC会让js引擎在空闲时间执行任务，而且不会妨碍优先级高的任务，比如渲染线程执行渲染过程，有些浏览器还是没实现这个API，所以一般会这样polyfill

```ts
// RIC and shim for browsers setTimeout() without it
const requestIdleCallback =
  window.requestIdleCallback ||
  function requestIdleCallback(cb: CallableFunction) {
    const start = Date.now();
    return setTimeout(() => {
      cb({
        didTimeout: false, // 返回 callback 任务是否超时
        timeRemaining() { // 返回当前帧还剩多少时间供用户使用
          return Math.max(0, 50 - (Date.now() - start));
        },
      });
    }, 1);
  };
```
> 潜在的问题：使用 requestIdleCallback 更新 DOM 存在问题，操作 DOM 的时间影响是不可预测的，很容易超过浏览器提供的 deadline。好的方案是只在 requestAnimationFrame 回调中进行对 DOM 更新，因为浏览器分配的时候就考虑到了这种类型的任务

### 两个问题
requestAnimationFrame 在哪个阶段执行，在渲染前还是后？
requestIdleCallback 在哪个阶段执行？如何去执行？在渲染前还是后？
requestIdleCallback里的回掉函数如何确保让他强制执行

### 链表数据结构
前中后序遍历

## 为啥需要fiber

1.CPU的瓶颈(执行栈深度递归遍历，长期占用浏览器资源)
2.IO的瓶颈(渲染卡顿，渲染进程中js引擎和Gui渲染线程互斥）

> GUI渲染线程和JS引擎线程是互斥的，为了防止DOM渲染的不一致性，其中一个线程执行时另一个线程会被挂起。

> time slicing(时间分片) / suspend(中断)

React16将递归的无法中断的更新 重构为异步的可中断更新，由于曾经用于递归的虚拟DOM数据结构已经无法满足需要。于是，全新的Fiber架构应运而生.

总结一下 Fiber 想要的结果
1.新的任务调度，不阻塞高优先级的任务，有空闲时间了再去执行低优先级的任务(requestIdleCallback)
2.新的数据结构，可中断，下次进来的时候接着执行

## 什么是fiber

英文含义是'纤维'，比线程更细的线，比线程控制得更精细的执行模型，之前说过 react 会阻止优先级高的代码（比如用户输入）执行。因此核心团队 历时两年自己自建了一个虚拟执行栈来解决这个问题，这个虚拟执行栈的底层实现就是链表

 > Generator ES6，为啥不采用？性能开销，需要兼容浏览器

### 怎么理解fiber

- 架构层面，之前React15的Reconciler采用递归的方式执行，数据保存在递归调用栈中，所以被称为stack Reconciler。React16的Reconciler基于Fiber节点实现，被称为 *Fiber Reconciler*

- 数据结构(虚拟堆栈帧)，每个Fiber节点对应一个React element，保存了该组件的类型（函数组件/类组件/原生组件...）、对应的DOM节点等信息，一个 fiber包括了 child（指向第一个子Fiber节点）、sibling（指向兄弟Fiber节点）、return（指向父级Fiber节点）等属性

- 工作单元， 每个Fiber节点保存了本次更新中该组件改变的状态、要执行的工作（需要被删除/被插入页面中/被更新...），每次执行完一个执行单元，react 就会检查现在还剩多少时间，如果没有时间则将控制权让给渲染线程，有空余时间就去执行下一个任务

## fiber 链表的结构设计(架构层面)

每一个 Fiber Node 节点与 Virtual Dom 一一对应，所有 Fiber Node 连接起来形成 Fiber tree, 是个单链表树结构

> 链表结构，随机访问是O(n), 插入和删除是O(1),数组随机访问是O(1),插入和删除是O(n)
```js
class Update {
  constructor(payload, nextUpdate) {
    this.payload = payload // payload 数据
    this.nextUpdate = nextUpdate // 指向下一个节点的指针
    this.baseState = null // state
    this.firstUpdate = null // 第一个更新
    this.lastUpdate = null // 最后一个更新
  }
  enqueueUpdate(update) {
    // 当前链表是空链表
    if (!this.firstUpdate) {
      this.firstUpdate = this.lastUpdate = update
    } else {
      // 当前链表不为空
      this.lastUpdate.nextUpdate = update
      this.lastUpdate = update
    }
  }
  // 获取state，然后遍历这个链表，进行更新
  forceUpdate() {
    let currentState = this.baseState || {}
    let currentUpdate = this.firstUpdate
    while (currentUpdate) {
      // 判断是函数还是对象，是函数则需要执行，是对象则直接返回
      let nextState = typeof currentUpdate.payload === 'function' 
        ? currentUpdate.payload(currentState) 
        : currentUpdate.payload
      currentState = { ...currentState, ...nextState }
      currentUpdate = currentUpdate.nextUpdate
    }
    // 更新完成后清空链表
    this.firstUpdate = this.lastUpdate = null
    this.baseState = currentState
    return currentState
  }
}
```

## fiber 节点设计(数据结构)
```ts
{
  // 跟当前Fiber相关本地状态（比如浏览器环境就是DOM节点）
  stateNode: any,
  // 单链表树结构
  return: Fiber | null,// 指向他在Fiber节点树中的`parent`，用来在处理完这个节点之后向上返回
  child: Fiber | null,// 指向自己的第一个子节点
  sibling: Fiber | null,  // 指向自己的兄弟结构，兄弟节点的return指向同一个父节点

  // 更新相关
  pendingProps: any,  // 新的变动带来的新的props
  memoizedProps: any,  // 上一次渲染完成之后的props
  updateQueue: UpdateQueue<any> | null,  // 该Fiber对应的组件产生的Update会存放在这个队列里面
  memoizedState: any, // 上一次渲染的时候的state

  // Scheduler 相关
  expirationTime: ExpirationTime,  // 代表任务在未来的哪个时间点应该被完成，不包括他的子树产生的任务
  // 快速确定子树中是否有不在等待的变化
  childExpirationTime: ExpirationTime,
  
 // 在Fiber树更新的过程中，每个Fiber都会有一个跟其对应的Fiber
  // 我们称他为`current <==> workInProgress`
  // 在渲染完成之后他们会交换位置
  alternate: Fiber | null,

  // Effect 相关的
  effectTag: SideEffectTag, // 用来记录Side Effect
  nextEffect: Fiber | null, // 单链表用来快速查找下一个side effect
  firstEffect: Fiber | null,  // 子树中第一个side effect
  lastEffect: Fiber | null, // 子树中最后一个side effect
}
```

## fiber执行原理(复杂)
调和过程(reconciliation)分为两个阶段
- render/reconciliation 阶段：这个阶段是可中断的，会找出所有节点的变更(interruptible)
- commit 阶段：这个阶段是不可中断的，会执行所有的变更

### 跟stack执行顺序对比
Stack 在执行时是以一个 tree 为单位处理；Fiber 则是以一个 fiber 的单位执行。Stack 只能同步的执行；Fiber 则可以针对该 Fiber 做调度处理。也就是说，假设现在有个 Fiber 其单链表（Linked List）结构为 A → B → C，当 A 执行到 B 被中断的话，可以之后再次执行 B → C，这对 Stack 的同步处理结构来说是很难做到的

### Render阶段  (effect list)

此阶段会找出所有节点的变更，如节点新增、删除、属性变更等，这些变更 react 统称为副作用（side effect），此阶段会构建一棵 名为 workInProgress 的Fiber tree，以虚拟dom节点为维度对任务进行拆分，即一个虚拟dom节点对应一个任务，最后产出的结果是effect list，从中可以知道哪些节点更新、哪些节点增加、哪些节点删除了。

#### 遍历流程
React Fiber首先是将虚拟DOM树转化为Fiber tree，因此每个节点都有child、sibling、return属性，遍历Fiber tree时采用的是*后序*遍历方法(左右根)

#### 收集effect list
接下来要做的工作就是在遍历过程中，收集所有节点的变更产出effect list，注意其中只包含了需要变更的节点。通过每个节点更新结束时向上归并effect list来收集任务结果，最后根节点的effect list里就记录了包括了所有需要变更的结果。

### commit阶段 
commit 阶段需要将上阶段计算出来的需要处理的副作用 side effect 一次性执行，此阶段不能暂停，否则会出现UI更新不连续的现象。此阶段需要根据effect list，将所有更新都 commit 到DOM树上。
- 根据一个 fiber 的 effect list 更新视图
- 根据全部 fiber 的 effect list 更新视图
- 调用 commitRoot 完成视图更新

## 问题答案
requestAnimationFrame在重新渲染屏幕「之前」执行，非常适合用来做动画。
requestIdleCallback在渲染屏幕「之后」执行，并且是否有空执行要看浏览器的调度，
如果你一定要它在某个时间内执行，请使用 timeout参数，但请谨慎使用，则有可能为了在超时前执行函数而打乱执行顺序

## 参考链接
- [requestIdleCallback](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/requestIdleCallback)
- [Fiber的起源](https://react.iamkasong.com/process/fiber.html#fiber%E7%9A%84%E8%B5%B7%E6%BA%90)
- [走进 React Fiber 的世界](https://mp.weixin.qq.com/s/uYd72aUb9wvUcjICFLREgg)
- [浅析 React Fiber](https://juejin.cn/post/6844903712285016071)
- [如何以及为什么React Fiber使用链表遍历组件树](https://github.com/dawn-plex/translate/blob/master/articles/the-how-and-why-on-reacts-usage-of-linked-list-in-fiber-to-walk-the-components-tree.md)