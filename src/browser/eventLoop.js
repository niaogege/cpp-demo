/*
 * @Author: Chendapeng
 * @Date: 2022-03-11 15:27:09
 * @LastEditors: Chendapeng
 * @LastEditTime: 2022-03-11 17:26:28
 * @Description: 测试事件循环
 */
console.log(1);
setTimeout(()=> {
  console.log(2);
  setTimeout(() => {
    console.log(3);
  }, 0)
}, 0)
setTimeout(() => {
  console.log(4);
}, 0)
console.log(5);
// 1 5 2 4 3
/**
 * 上面的代码最后输出1，5，2，4，3，执行过程：

1，输出1，将2push进回调队列

2，将4push进回调队列

3，输出5

4，清空了执行栈，读取输出2，发现有3，将3push进回调队列

5，清空了执行栈，读取输出4

6，清空了执行栈，读取输出3
 */

console.log(1);
setTimeout(()=>{
	console.log(2)
})
var p = new Promise((resolve,reject)=>{
	console.log(3)
	resolve("成功")
})
p.then(()=>{
	console.log(4)
})
console.log(5)
/**
 * 1 3 5 4 2
 */

setTimeout(() => {
  console.log(1);
}, 0)
Promise.resolve().then(() => {
  console.log(2);
  Promise.resolve().then(() => {
    console.log(3);
  })
})
Promise.resolve().then(() => {
  console.log(4);
})