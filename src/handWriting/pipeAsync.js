/*
 * @Author: Chendapeng
 * @Date: 2022-03-09 17:08:25
 * @LastEditors: Chendapeng
 * @LastEditTime: 2022-03-20 21:39:44
 * @Description: 
 */
/**
 * @author: Chendapeng
 * @description: 管道异步函数实现
 * @param {*}
 * @return {*}
 */

var PipeAsync = (...func) => {
  return func.reduce((a,b) => {
    return (...arg) => a(b(...arg))
  })
}
var double = x => x * 2
var triple = x => x * 3
var asyncF = x => new Promise(resolve => {
  setTimeout(() => {
    resolve(x + 2)
  }, 1000)
})

// PipeAsync(double, triple, asyncF)(10)
var pipeAsyncF = (...func) => {
  return arg => func.reduce((p, f) => p.then(f), Promise.resolve(arg))
};

var sum = pipeAsyncF(
  double,
  triple,
  asyncF,
  async x => (await x) + 4
);
(async() => {
  var tt = await sum(5)
  console.log(tt)
})(); // 一秒之后 打印 36