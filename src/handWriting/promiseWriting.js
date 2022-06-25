class PromiseTest {
  static PENDING = "pending";
  static FULFILLED = "fulfilled";
  static REJECTED = "rejected";
  constructor(executor) {
    this.status = PromiseTest.PENDING;
    this.value = undefined;
    this.cbs = [];
    try {
      executor(this.resolve.bind(this), this.reject.bind(this));
    } catch (e) {
      this.reject(e);
    }
  }
  // pending异步
  resolve(value) {
    if (this.status === PromiseTest.PENDING) {
      setTimeout(() => {
        this.status = PromiseTest.FULFILLED;
        this.value = value;
        this.cbs.forEach((fn) => fn.onFulfilled(value));
      });
    }
  }
  // pending异步
  reject(value) {
    if (this.status === PromiseTest.PENDING) {
      setTimeout(() => {
        this.status = PromiseTest.REJECTED;
        this.value = value;
        this.cbs.forEach((fn) => fn.onRejected(value));
      });
    }
  }
  then(onFulfilled, onRejected) {
    if (typeof onFulfilled !== "function") {
      onFulfilled = (val) => val;
    }
    if (typeof onRejected !== "function") {
      onRejected = (res) => res;
    }
    let p1 = new PromiseTest((resolve, reject) => {
      if (this.status === PromiseTest.PENDING) {
        this.cbs.push({
          onFulfilled: (value) => {
            try {
              this.parse(p1, onFulfilled(value), resolve, reject);
            } catch (e) {
              reject(e);
            }
          },
          onRejected: (value) => {
            try {
              this.parse(p1, onFulfilled(value), resolve, reject);
            } catch (e) {
              reject(e);
            }
          },
        });
      }
      if (this.status === PromiseTest.FULFILLED) {
        setTimeout(() => {
          try {
            this.parse(p1, onFulfilled(this.value), resolve, reject);
          } catch (e) {
            let res = onRejected(e);
            reject(res);
          }
        });
      }
      if (this.status === PromiseTest.REJECTED) {
        setTimeout(() => {
          try {
            this.parse(p1, onFulfilled(this.value), resolve, reject);
          } catch (e) {
            reject(e);
          }
        });
      }
    });
    return p1;
  }
  parse(p1, res, resolve, reject) {
    if (p1 === res) {
      throw new TypeError("Chaining cycle detected for promise");
    }
    try {
      if (res instanceof PromiseTest) {
        res.then(resolve, reject);
      } else {
        resolve(res);
      }
    } catch (e) {
      reject(e);
    }
  }
  static resolve(val) {
    return new PromiseTest((resolve, reject) => {
      if (val instanceof PromiseTest) {
        val.then(resolve, reject);
      } else {
        resolve(val);
      }
    });
  }
  static reject(res) {
    return new PromiseTest((resolve, reject) => {
      reject(res);
    });
  }
  static all(arr = []) {
    let result = [];
    return new PromiseTest((resolve, reject) => {
      for (let [index, item] of arr.entries()) {
        PromiseTest.resolve(item).then(
          (res) => {
            result.push(res);
            if (index === arr.length - 1) {
              resolve(result);
            }
          },
          (err) => {
            reject(err);
          }
        );
      }
    });
  }
  static race(arr = []) {
    return new PromiseTest((resolve, reject) => {
      for (let [index, item] of arr.entries()) {
        PromiseTest.resolve(item).then(
          (res) => {
            resolve(res);
          },
          (err) => {
            reject(err);
          }
        );
      }
    });
  }
}

// demo
var p3 = new PromiseTest((resolve, reject) => {
  resolve("p1");
  console.log("start");
})
  .then(
    (res) => {
      console.log(res, "then1");
      return "Cpp then";
    },
    (err) => {
      console.log(err);
    }
  )
  .then(
    (res) => {
      console.log(res, "then2");
      return "CPP then2";
    },
    (err) => {
      console.log(err);
    }
  )
  .then((res) => {
    console.log(res, "then3");
  });
