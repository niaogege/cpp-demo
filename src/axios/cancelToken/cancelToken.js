function CancelToken(executor) {
  if (typeof executor !== "function") {
    throw new TypeError("executor must be function");
  }
  var resolvePromise;
  this.promise = new Promise((resolve) => {
    resolvePromise = resolve;
  });
  var token = this;
  // executor(resolvePromise);
  executor(function cancel(message) {
    if (token.reason) {
      return;
    }
    token.reason = new Error(message);
    resolvePromise(token.reason);
  });
}

CancelToken.source = function () {
  var cancel;
  var token = new CancelToken((c) => {
    cancel = c;
  });
  return {
    token,
    cancel, // 用户侧调用的时候 手动取消请求
  };
};

export default CancelToken;
