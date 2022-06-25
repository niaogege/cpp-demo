var randomNum = (min, max) => Math.floor(Math.random() * (max - min));
var createDelay =
  ({ willResolve }) =>
  (ms, { value } = {}) => {
    let timeoutId;
    let settle;
    const delayPromise = new Promise((resolve, reject) => {
      settle = () => {
        if (willResolve) {
          resolve(value);
        } else {
          reject(value);
        }
      };
      timeoutId = setTimeout(settle, ms);
    });
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
  delay.range = (min, max, options) => delay(randomNum(min, max), options);
  return delay;
};
var delay5 = createWithTimers();
(async () => {
  const delayP = delay5(1000, { value: "cpp" });
  setTimeout(() => {
    delayP.clear();
  }, 300);
  console.log(await delayP);
})();
