// 手写promise

import { resolve } from "dns";

// 0518
class MyPromise {
  constructor(executor) {
    this.data = undefined;
    this.cbs = [];
    const resolve = (res) => {
      setTimeout(() => {
        this.data = res;
        this.cbs.forEach((fn) => fn(res));
      });
    };
    executor(resolve);
  }
  then(fulfilled) {
    return new MyPromise((resolve) => {
      this.cbs.push(() => {
        const res = fulfilled(this.data); // 得到resolve的值
        // console.log(fulfilled);
        if (res instanceof MyPromise) {
          console.log(res, "res");
          console.log(res.then, "——————res.then");
          console.log(resolve, "resolve");
          res.then(resolve); // 这一步如何理解？？Promise.then()
        } else {
          resolve(res);
        }
      });
    });
  }
}
var p1 = new MyPromise((resolve) => {
  setTimeout(() => {
    resolve(1);
  }, 500);
});
p1.then((res) => {
  console.log(res);
  return new MyPromise((resolve) => {
    setTimeout(() => {
      resolve(2);
    }, 500);
  });
}).then((res) => console.log(res, "Last"));

var p11 = new Promise((resolve, reject) => {
  resolve("111");
});
var p22 = p11.then((val) => {
  return p22;
});
