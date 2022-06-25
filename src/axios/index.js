import Axios from "./core/axios";
import CancelToken from "./cancelToken/cancelToken";

function creatInstance(config) {
  const context = new Axios(config);
  var instance = Axios.prototype.request.bind(context);
  // 原型继承Axios.prototype赋值给 instance
  for (let k of Object.keys(Axios.prototype)) {
    instance[k] = Axios.prototype[k].bind(context);
  }
  // 实例继承  context实例属性赋值给 instance
  for (let k of Object.keys(context)) {
    instance[k] = context[k];
  }
  instance.create = function create(defaultConfig) {
    return creatInstance(Object.assign({}, defaultConfig, config));
  };
  return instance;
}

const axios = creatInstance({});
axios.Axios = Axios;
axios.CancelToken = CancelToken;

axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.VERSION = "0.0.0.1";
export { axios };
export default axios;
