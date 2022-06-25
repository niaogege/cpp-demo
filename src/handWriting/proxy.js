/*
 * @Author: Chendapeng
 * @Date: 2022-04-08 17:49:30
 * @LastEditors: Chendapeng
 * @LastEditTime: 2022-04-09 22:11:19
 * @Description: proxy学习
 */
let obj = {
  name: 'Chendapeng'
}

let proxyInstance = new Proxy(obj, {
  get(target, key, receiver) {
    console.log('Key', key, receiver === proxyInstance);
    return target[key]
  }
})

var tt = proxyInstance.name;
console.log(tt);


const parent = {
  get value() {
    return 'CPP'
  }
}
const proxy2 = new Proxy(parent, {
  get(target, key, receiver) {
    console.log(receiver === proxy2);
    return target[key]
  }
})

const obj2 = {
  name: 'WMH'
}

Object.setPrototypeOf(obj2, proxy2)

var tt2 = obj2.value
console.log(tt2, 'tt2');
console.log(obj2, 'obj2');
console.log(Object.getPrototypeOf(obj2) === proxy2);


function B() {
  this.name = 'CPp'
}
var bb = new B()
console.log(bb.__proto__ === B.prototype); // true
console.log(bb.constructor === B); // true

var pro = Object.create(bb)
Object.getPrototypeOf(pro) // anthor

console.log(Object.getPrototypeOf(pro) === pro.__proto__)