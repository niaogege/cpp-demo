import createTransitionManager from "./createTransitionManager";

function createBrowserHistory() {
  const transitionManager = createTransitionManager();
  let location = {
    pathname: "/",
  };
  const handlePop = function () {
    const currentLocation = {
      pathname: window.location.pathname,
    };
    // 路由变化执行回调
    transitionManager.notifyListeners(currentLocation);
  };
  // 注意pushState和replaceState并不会触发popstate
  // 我们这里监听这个事件是为了处理浏览器的前进后退
  window.addEventListener("popstate", handlePop);
  function listen(listener) {
    const unlisten = transitionManager.appendListener(listener);
    return () => {
      unlisten();
    };
  }
  function push(url) {
    const globalHistory = window.history;
    // 点击的时候改变url 但是popstate监听不到
    globalHistory.pushState({}, null, url);
    location = {
      pathname: url,
    };
    // push确实不会触发popstate事件 需要手动调用回调函数
    transitionManager.notifyListeners(location);
  }
  const history = {
    listen,
    location,
    push,
  };
  return history;
}
export default createBrowserHistory;
