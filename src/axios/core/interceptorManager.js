function InterceptorManager() {
  this.handlers = [];
}
InterceptorManager.prototype.use = function (onFulfilled, onRejected, options) {
  this.handlers.push({
    fulfilled: onFulfilled,
    rejected: onRejected,
    synchronous: options ? options.synchronous : false,
  });
  return this.handlers.length - 1;
};
InterceptorManager.prototype.forEach = function (fn) {
  this.handlers.forEach((e) => {
    if (e !== null) {
      fn(e);
    }
  });
};
InterceptorManager.prototype.clear = function clear() {
  if (this.handlers) {
    this.handlers = [];
  }
};

InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};
export default InterceptorManager;
