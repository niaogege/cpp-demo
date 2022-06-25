export function xhrAdapter(config) {
  if (!Object.keys(config).length) {
    throw TypeError("config缺少参数");
  }
  return new Promise((resolve, reject) => {
    var xhr = new XMLHttpRequest();
    // 取消请求
    if (config && config.cancelToken) {
      // 只有resolved的时候才能取消请求
      // 相当于new CancelToken()
      config.cancelToken.promise.then(function onCanceled(res) {
        if (!xhr) return;
        xhr.abort();
        reject("人为取消请求");
        xhr = null;
      });
    }
    xhr.open(config.method, config.url);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status >= 200) {
          resolve({
            ret: 0,
            status: xhr.status,
            data: JSON.parse(xhr.responseText),
          });
        } else {
          reject({
            ret: -1,
            status: xhr.status,
          });
        }
      }
    };
    xhr.send();
  });
}
