/*
 * @Author: Chendapeng
 * @Date: 2022-03-20 21:32:14
 * @LastEditors: Chendapeng
 * @LastEditTime: 2022-03-20 21:43:07
 * @Description: 
 */
// 从左往右执行
var double = x => x * 2
var triple = x => x * 3
var fourble = x => x * 4
var compose1 = (...fns) => {
  if (!fns.length) {
    return (arg) => arg;
  }
  if (fns.length === 1) {
      return fns[0]()
  }
  return (p) => fns.reduce((a,b) => {
      return b(a)
  }, p)
}
var mix = compose1(
    double,
    triple,
    fourble
)
mix(10)

var compose2 = function(){
  var funs = [].slice.apply(arguments)
  if (!funs.length) return (args) => args;
  if (funs.length === 1) return funs[0]
  return funs.reduce((a, b) => {
    return (...arg) => a(b(arg))
  })
}
var mix2 = compose2(
  double,
  triple,
  fourble
)
mix2(10)