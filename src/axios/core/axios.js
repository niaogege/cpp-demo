import InterceptorManager from "./interceptorManager";
import { getDefaultAdapter } from "../defaults/index";
function Axios(config) {
  this.config = config;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager(),
  };
}

Axios.prototype.request = function (config) {
  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = "get";
  }
  const adapter = getDefaultAdapter();
  // 默认是同步的拦截器
  let synchronousRequestInterceptors = true;
  // 请求拦截
  const requestInterceptorChain = [];
  this.interceptors.request.forEach(
    ({ fulfilled, rejected, synchronous = false }) => {
      synchronousRequestInterceptors =
        synchronousRequestInterceptors && synchronous;
      requestInterceptorChain.unshift(fulfilled, rejected);
    }
  );

  // 响应拦截
  const responseInterceptorChain = [];
  this.interceptors.response.forEach(({ fulfilled, rejected }) => {
    responseInterceptorChain.push(fulfilled, rejected);
  });
  var promise;
  // 如果是同步拦截器
  if (!synchronousRequestInterceptors) {
    let chain = [adapter, null];
    promise = Promise.resolve(config);
    chain.unshift(...requestInterceptorChain);
    chain = chain.concat(responseInterceptorChain);
    while (chain.length) {
      promise = promise.then(chain.shift(), chain.shift());
    }
    console.log(promise, "promise");
    return promise;
  }

  var newConfig = config;

  while (requestInterceptorChain.length) {
    const onFulfilled = requestInterceptorChain.shift();
    const onRejected = requestInterceptorChain.shift();
    try {
      newConfig = onFulfilled(newConfig);
    } catch (e) {
      onRejected(e);
      break;
    }
  }

  try {
    promise = adapter(newConfig);
  } catch (err) {
    return Promise.reject(err);
  }

  while (responseInterceptorChain.length) {
    promise = promise.then(
      responseInterceptorChain.shift(),
      responseInterceptorChain.shift()
    );
  }
  return promise;
};
Axios.prototype.get = function (url, config = {}) {
  return this.request({
    url,
    method: "GET",
    ...config,
  });
};
Axios.prototype.post = function (url, config = {}) {
  return this.request({
    url,
    method: "POST",
    ...config,
  });
};

export default Axios;
