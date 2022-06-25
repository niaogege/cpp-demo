const createStore = function (reducer, initState, rewriteCreateStoreFunc) {
  // 入參处理
  if (typeof initState === "function") {
    initState = undefined;
    rewriteCreateStoreFunc = initState;
  }
  // applymiddleware 中间件
  if (rewriteCreateStoreFunc) {
    const newCreateStore = rewriteCreateStoreFunc(createStore);
    return newCreateStore(reducer, initState);
  }

  let state = initState;
  let listeners = [];

  // 订阅
  function subscribe(listener) {
    listeners.push(listener);
    return function unsubscribe() {
      const index = listeners.indexOf(listener);
      listeners.splice(index, 1);
    };
  }

  // 改变状态
  function dispatch(action) {
    state = reducer(state, action);
    for (let listener of listeners) {
      listener();
    }
  }

  // 得到state
  function getState() {
    return state;
  }

  // 替换store当前使用的reducer计算状态
  function replaceReducer(nextReducer) {
    reducer = nextReducer;
    // 刷新一遍state值 新来的reducer把自己的默认状态放到state树上去
    dispatch({ type: Symbol() });
  }

  // 用一个不匹配任何计划的type 来获取初始值
  dispatch({ type: Symbol() });
  return {
    subscribe,
    getState,
    dispatch,
    replaceReducer,
  };
};

export default createStore;
