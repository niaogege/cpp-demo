/*
 * @Author: Chendapeng
 * @Date: 2021-07-31 14:45:47
 * @LastEditors: Chendapeng
 * @LastEditTime: 2021-08-01 10:30:27
 * @Description: 
 */

/**
 * Fiber 是堆栈的重新实现，专门用于 React 组件
 * 你可以将单个 Fiber 视为一个虚拟堆栈帧。
 */
export let fiber = {
  // tag: HOST_COMPONENT,
  type: "div",
  // return: parentFiber,
  // children: childFiber,
  // sibling: childFiber,
  // alternate: currentFiber,
  stateNode: document.createElement("div"),
  props: { children: [], className: "foo" },
  partialState: null,
  // effectTag: PLACEMENT,
  effects: [],
};

// requestIdleCallback(line => {
//   console.log('line');
//   if (line.timeRemaining() > 0) {
//     console.log('todolist');
//   } else {
//     requestIdleCallback(otherTask)
//   }
// })
