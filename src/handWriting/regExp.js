/*
 * @Author: Chendapeng
 * @Date: 2022-03-08 11:23:43
 * @LastEditors: Chendapeng
 * @LastEditTime: 2022-03-11 14:25:00
 * @Description: https://juejin.cn/post/7070284710131269669
 * 正则表达式练习
 * ?=(\d{3}) 正向先行断言
 * ?!^ 负向先行断言
 * https://jex.im/regulex/#!flags=ig&re=(%3F!%5E)(%3F%3D(%5Cd%7B3%7D)%2B%24)
 */
// 数字价格千分位分割
var reg = new RegExp(`(?!^)(?=(\\d{3})+$)`, 'i')
var reg2 = /(?!^)(?=(\d{3})+$)/
var test = `123456789`
var formNum = (num) => {
  return num.replace(reg, ',')
}
formNum(test)
// 123,456,789
// 字符串驼峰化
/**
 * 1. foo Bar => fooBar
2. foo-bar---- => fooBar
3. foo_bar__ => fooBar
? 代表0或者多个
 */
function transform(str) {
  return str.replace(/[\s-_@]+(.)?/g, (match, p) => {
    return p ? p.toUpperCase() : ''
  })
}
transform('foo-bar')

function form(str) {
  return str.replace(/(?!^)(?=(\d{3})+$)/g, ',')
}
form('123456789')

// 横向匹配
function hor () {
  var reg = /ab{2,3}c/g
  var str = 'abc abbc abbbc abbbbc abbbbbc abbbbbbc'
  str.match(reg) // ['abbc', 'abbbc']
}

function Ver() {
  var reg = /a[01]b/g
  var str = 'a0b a1b a2b a3b a4b'
  str.match(reg); // ['a0b', 'a1b']
}

// 将首字母转化大写 剩下为小写
function firstUpperCase(str) {
  let reg = /(?:^|\s)\w/g
  return str.toLowerCase().replace(reg, (match) => match.toUpperCase())
}
firstUpperCase('cpp wmh')