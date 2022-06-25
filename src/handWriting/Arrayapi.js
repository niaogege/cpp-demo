/* eslint-disable no-extend-native */
/*
 * @Author: Chendapeng
 * @Date: 2021-11-16 21:33:23
 * @LastEditors: Chendapeng
 * @LastEditTime: 2022-05-04 21:27:01
 * @Description: js相关api接口手写
 */
//
// 手写map
export {};
var arr = [1, 2, 3];
var test = arr.map((e) => e * 2);
//  mock Map
Array.prototype.myMap = function (cb, context) {
  const arr = Array.prototype.slice.call(this);
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    const item = cb.call(context, arr[i], i, this);
    res.push(item);
  }
  return res;
};
var test1 = arr.myMap((e) => e * 2);

console.log(test, test1);
var test2 = arr.filter((e) => e % 2 === 0);

// mock filter
Array.prototype.myFilter = function (cb, context) {
  const arr = Array.prototype.slice.call(this);
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    const item = cb.call(context, arr[i], i, arr);
    if (item) {
      res.push(arr[i]);
    }
  }
  return res;
};
var test3 = arr.myFilter((e) => e % 2 === 0);
console.log(test2, test3);

// mock reduce
Array.prototype.myReduce = function (cb, initialValue, context) {
  const arr = Array.prototype.slice.call(this);
  if (initialValue) {
    arr.push(initialValue);
  }
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    var item = cb.call(context, arr[i], i, arr);
    res.push(item);
  }
  return res;
};

// flatter
var arr2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
var test4 = arr2.flat();
Array.prototype.myFlat = function () {
  var arr = this;
  var res = [];
  // var flatter = (arr) => {
  //   return arr.reduce((pre, val) => {
  //     if (Array.isArray(val)) {
  //       return flatter(val)
  //     }
  //     res.push(val)
  //     return [...pre, val]
  //   }, [])
  // }
  var flatten2 = (arr) =>
    Array.isArray(arr)
      ? arr.reduce((pre, val) => [...pre, ...flatten2(val)], [])
      : [arr];
  return flatten2(arr);
};
var arr3 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
var flatten = (arr) => {
  var stack = [...arr];
  var res = [];
  while (stack.length) {
    var next = stack.pop();
    if (Array.isArray(next)) {
      stack.push(...next);
    } else {
      res.push(next);
    }
  }
  return res.reverse();
};
var test5 = flatten(arr3);
console.log(test5);

// 用map实现reduce
Array.prototype.myMap = function (cb, context) {
  let arr = Array.prototype.slice.call(this);
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(cb.call(context, arr[i], i, this));
  }
  return res;
};

// 实现reduce
Array.prototype.myReduce = function (cb, initialValue) {
  const arr = Array.prototype.slice.call(this);
  if (initialValue) {
    arr.push(initialValue);
  }
  let startIndex;
  let res = initialValue ? initialValue : arr[0];
  startIndex = initialValue ? 1 : 0;
  for (let i = startIndex; i < arr.length; i++) {
    res = cb.call(null, arr[i], i, arr);
  }
  return res;
};

// 实现find
Array.prototype.myFind = function (cb, context) {
  let arr = Array.prototype.slice.call(this);
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    let isMan = cb.call(context, arr[i], i, this);
    if (isMan && res.length === 0) {
      res.push(arr[i]);
      return arr[i];
    }
  }
};

// 深拷贝
function deepClone(data) {
  if (typeof data !== "object") return obj;
  var target = Array.isArray(data) ? [] : {};
  for (let key in data) {
    if (data.hasOwnProperty(key)) {
      target[key] = Array.isArray(data[key]) ? deepClone(data[key]) : data[key];
    }
  }
  return target;
}
var obj = {
  age: 31,
  hobby: ["shufa", "fit"],
};
var copy = deepClone(obj);
obj.age = 32;
console.log(copy.age); // 31
