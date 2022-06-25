function ajax({ url, success }) {
  const config = {
    url,
    type: "GET",
    async: true,
    success,
  };
  let xhr = new XMLHttpRequest();
  xhr.open(config.type, config.url, config.async);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        let res = JSON.parse(xhr.responseText);
        success(res);
      }
    }
  };
  xhr.send();
}
// 使用
ajax({
  url: "/api/getData",
  success: function (res) {
    console.log(res);
  },
});

var urls = [6000, 1000, 2000, 5000, 2000];
const request = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(url);
      console.log(url);
    }, url);
  });
};
var i = 0;
const cons = (res) => {
  console.log(++i);
};
function dealLimitQuest(urls, max, cb) {
  const len = urls.length;
  const queue = [];
  const res = []; // 存储结果
  let i = 0;
  const handleRequest = (url) => {
    const req = request(url).then((resp) => {
      let length = res.push(resp);
      console.log(`当前并发${queue}`);
      // 当前请求的结束值集合小于urls.length
      if (length < len && i + 1 < len) {
        queue.shift();
        handleRequest(urls[++i]);
      } else if (length === len) {
        if (typeof cb === "function") {
          cb(res);
        }
      }
    });
    if (queue.push(req) < max) {
      handleRequest(urls[++i]);
    }
  };
  handleRequest(urls[i]);
}
dealLimitQuest(urls, 2, cons);

function dealPool(max, arr, fn) {
  let len = arr.length;
  let ret = [];
  const executing = new Set();
  let i = 0;
  const enqueue = () => {
    // 循环终止
    if (i === len) {
      return Promise.resolve();
    }
    const item = arr[i++];
    const p = Promise.resolve(item).then(() => fn.call(null, item));
    ret.push(p);
    executing.add(p);
    const clean = () => {
      executing.delete(p);
    };
    p.then(clean).catch(clean);
    var r = Promise.resolve();
    if (max <= executing.size) {
      r = Promise.race(executing);
    }
    return r.then(() => enqueue());
  };
  return enqueue().then(() => Promise.all(ret));
}
// 测试下
var request1 = (n) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
      console.log(n);
    }, n);
  });
};
var arr = [1000, 1000, 2000, 5000, 2000];
dealPool(2, arr, request1);
