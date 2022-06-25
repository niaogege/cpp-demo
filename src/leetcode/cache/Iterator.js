/*
 * @Author: Chendapeng
 * @Date: 2021-12-15 22:01:04
 * @LastEditors: Chendapeng
 * @LastEditTime: 2021-12-15 22:21:51
 * @Description: 手写迭代器
 */

class MakeIterator {
  constructor(obj) {
    this.obj = obj
    this.len = Object.keys(obj).length
    this.index = 0
  }
  [Symbol.iterator]() {
    return this
  }
  next() {
    return this.index < this.len 
    ? {done: false, value: this.obj[this.index++]}
    : {done: true, value: undefined}
  }
}
let obj = {
  0: 'chen',
  1: 'da',
  2: 'peng',
  length: 3
}
let test = new MakeIterator(obj)
for (let val of test) {
  console.log(val);
}