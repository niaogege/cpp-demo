var createAbortError = () => {
  const error = new Error("delay Aborted");
  error.name = "CPP Error";
  return error;
};
var createDelay =
  ({ willResolve }) =>
  (ms, { signal, value } = {}) => {
    if (signal?.aborted) {
      console.log("Before Cancel");
      return Promise.reject(createAbortError());
    }
    let timeoutId;
    let settle;
    let rejectFn;
    // 定义监听器
    const signalListener = () => {
      clearTimeout(timeoutId);
      rejectFn(createAbortError());
    };
    // clear
    const cleanup = () => {
      if (signal) {
        signal.removeEventListener("abort", signalListener);
      }
    };
    const delayPromise = new Promise((resolve, reject) => {
      settle = () => {
        cleanup();
        if (willResolve) {
          resolve(value);
        } else {
          reject(value);
        }
      };
      rejectFn = reject;
      timeoutId = setTimeout(settle, ms);
    });
    // 注册
    if (signal) {
      signal.addEventListener("abort", signalListener, { once: true });
    }
    delayPromise.clear = () => {
      clearTimeout(timeoutId);
      timeoutId = null;
      settle();
    };
    return delayPromise;
  };

var createWithTimers = () => {
  const delay = createDelay({ willResolve: true });
  delay.reject = createDelay({ willResolve: false });
  delay.range = (ms, options) => delay(ms, options);
  return delay;
};

var delay6 = createWithTimers();
(async () => {
  const abortController = new AbortController();
  setTimeout(() => {
    abortController.abort();
  }, 500);
  try {
    var tt = await delay6(2000, {
      value: "common val",
      signal: abortController.signal,
    });
    console.log(tt, "The Last Once");
  } catch (e) {
    console.log(e, "error");
  }
})();
