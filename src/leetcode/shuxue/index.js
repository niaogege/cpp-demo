/*
 * @Author: Chendapeng
 * @Date: 2021-08-27 13:48:55
 * @LastEditors: Chendapeng
 * @LastEditTime: 2021-08-27 13:59:33
 * @Description: 大数相加
 */

let a = "9007199254740991";
let b = "1234567899999999999";

function add(num1, num2){
  let maxLen = Math.max(num2.length, num1.length)
  num1 = num1.padStart(maxLen, 0)
  num2 = num2.padStart(maxLen, 0)
  let flag = 0; // 进位
  let res = ''
  let i = maxLen.length - 1
  while(i >= 0) {
    flag = Number(num1[i]) + Number(num2[i]) + flag
    res = (flag % 10) + res
    flag = flag > 10 ? 1 : 0
    i --
  }
  return flag == 1 ? '1' + res : res; 
}

let total = add(a, b)
console.log(total);
// 1243574099254730980