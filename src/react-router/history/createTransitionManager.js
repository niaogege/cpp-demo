// 管理history事件的
function createTransitionManager() {
  let listeners = [];
  function appendListener(fn) {
    let isActive = true;
    function listener(...args) {
      if (isActive) {
        fn(...args);
      }
    }
    listeners.push(listener);
    return () => {
      isActive = false;
      listeners = listeners.filter((item) => item !== listener);
    };
  }
  function notifyListeners(...args) {
    listeners.forEach((fn) => fn.apply(this, args));
  }
  return {
    appendListener,
    notifyListeners,
  };
}

export default createTransitionManager;
