/*
 * @Author: Chendapeng
 * @Date: 2021-11-06 17:19:20
 * @LastEditors: Chendapeng
 * @LastEditTime: 2021-11-07 20:20:19
 * @Description: 颠覆你的认知
 */

import { start } from "repl";


const NOOP = () => {}
// 方便判断 方便压缩
const instance = {
  render: NOOP
}
// test

const dev = true
if (dev) {
  instance.render = function () {
    console.log('render');
  }
}
if(instance.render === NOOP) {
  console.log('test');
}

export default NOOP

// onRE 是正则。^符号在开头，则表示是什么开头。而在其他地方是指非。
// 与之相反的是：$符合在结尾，则表示是以什么结尾。

const onRe = /^on[^a-z]/;
const isOn = (key: string) => onRe.test(key)

isOn('onChange');
isOn('onchange')

// 以'update:'开头
const isUpdate = (key: string) => key.startsWith('update:')
isUpdate('update:change') //  true

// substring || substr

var str = '25525511135'
str.substring(1,3) // 55
var str2 = '25525511135'
str2.substr(1,3) // 552
// substr(start, length) // 从start开始 截取length　
// substring(start, end) // 从start开始 不包含end