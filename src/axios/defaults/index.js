import { xhrAdapter } from "../adapter/xhr";
export function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== "undefined") {
    adapter = (config) => {
      return xhrAdapter(config);
    };
  } else if (
    typeof process !== "undefined" &&
    Object.prototype.toString.call(process) === "[object process]"
  ) {
    adapter = require("../adapter/http");
  }
  return adapter;
}

const defaults = {
  adapter: getDefaultAdapter(),
};
export default defaults;
