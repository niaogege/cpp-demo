function loadImg(src, cb) {
  console.log(process, "PROCESS");
  if (process !== undefined) return;
  const img = document.createElement("img");
  img.src = src;
  img.onload = () => cb(null, img);
  img.onerror = () => {
    cb("img error");
  };
  document.appendChild(img);
}
loadImg("//", (err, content) => {
  if (err) {
    console.log(err, "err");
  }
  console.log(content);
});

function loadImgPromise(src) {
  return new Promise((resolve, reject) => {
    loadImg(src, function (err, con) {
      if (err) {
        reject(err);
      }
      resolve(con);
    });
  });
}
loadImgPromise("//")
  .then((res) => {
    console.log(res, "res");
  })
  .catch((err) => {
    console.log(err);
  });

function promisify(fn) {
  const judge = (...args) => {
    return new Promise((resolve, reject) => {
      args.push(function say(err, val) {
        if (err) {
          reject(err);
        }
        resolve(val);
      });
      console.log(args[1], "args");
      fn.apply(this, args);
    });
  };
  return judge;
}
module.exports = {
  promisify,
};
var loadImageAsync = promisify(loadImg);
loadImageAsync("//")
  .then((res) => {})
  .catch((e) => {});
async function load(src) {
  try {
    var val = await loadImageAsync(src);
    console.log(val);
  } catch (err) {
    console.log(err);
  }
}

var curry = (fn) => {
  var judge = (...args) => {
    if (fn.length === args.length) {
      return fn(...args);
    } else {
      return (...arg) => judge(...arg, ...args);
    }
  };
  return judge;
};
var add = (a, b, c) => a + b + c;
var sum = curry(add);
sum(1)(2)(3);

var add2 = (...rest) => rest.reduce((a, b) => a + b);
var curry2 = (fn) => {
  var arr = [];
  var judge = (...arg) => {
    if (arg.length) {
      arr.push(...arg);
      return judge;
    } else {
      var val = fn.apply(this, arr);
      arr = [];
      return val;
    }
  };
  return judge;
};
var sum2 = curry2(add2);
sum2(1)(2)(3)();
