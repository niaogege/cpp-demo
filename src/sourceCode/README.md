<!--
 * @Author: Chendapeng
 * @Date: 2021-07-31 14:45:30
 * @LastEditors: Chendapeng
 * @LastEditTime: 2021-08-11 20:10:43
 * @Description: 
-->

Fiber的架构有两个主要阶段：协调/渲染和提交。在源码中，协调阶段通常被称为“渲染阶段”。这是React遍历组件树的阶段，并且：

更新状态和属性
调用生命周期钩子
获取组件的children
将它们与之前的children进行对比
并计算出需要执行的DOM更新

 其实部分浏览器已经实现了这个API，这就是requestIdleCallback。但是由于以下因素，Facebook 抛弃了 requestIdleCallback 的原生 API：

浏览器兼容性；
触发频率不稳定，受很多因素影响。比如当我们的浏览器切换tab后，之前tab注册的requestIdleCallback触发的频率会变得很低。
参考： requestIdleCallback 的 FPS 只有 20
  

基于以上原因，在React中实现了功能更完备的requestIdleCallbackpolyfill，这就是*Scheduler*。除了在空闲时触发回调的功能外，Scheduler还提供了多种调度优先级供任务设置。


React渲染页面的两个阶段
调度阶段（reconciliation）：在这个阶段 React 会更新数据生成新的 Virtual DOM，然后通过Diff算法，快速找出需要更新的元素，放到更新队列中去，得到新的更新队列。
渲染阶段（commit）：这个阶段 React 会遍历更新队列，将其所有的变更一次性更新到DOM上。


Concurrent Mode （并发模式）
  Concurrent Mode 指的就是 React 利用上面 Fiber 带来的新特性的开启的新模式 (mode)。​react17开始支持concurrent mode，这种模式的根本目的是为了让应用保持cpu和io的快速响应，它是一组新功能，包括Fiber、Scheduler、Lane，可以根据用户硬件性能和网络状况调整应用的响应速度，核心就是为了实现异步可中断的更新。concurrent mode也是未来react主要迭代的方向。