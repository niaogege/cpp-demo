/*
 * @Author: Chendapeng
 * @Date: 2021-09-10 22:15:19
 * @LastEditors: Chendapeng
 * @LastEditTime: 2021-09-10 22:16:39
 * @Description: 两数相加
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
  let n1 = []
  let n2 = []
  while(l1) {
      n1.push(l1.val)
      l1 = l1.next
  }
  while(l2) {
      n2.push(l2.val)
      l2 = l2.next
  }
  let total = reverseNumber(add(n1.join(''), n2.join('')))
  let last = total.split('');
  let dummy = {
      val: -1,
      next: null
  }
  let pre = dummy
  for (let i = 0; i < last.length;i++) {
      pre.next = {
          val: Number(last[i]),
          next: null
      }
      pre = pre.next
  }
  return dummy.next
};
// 大数逆序相加
var add = (num1, num2) => {
let maxLen = Math.max(num2.length, num1.length)
num1 = num1.padEnd(maxLen, 0)
num2 = num2.padEnd(maxLen, 0)
let flag = 0; // 进位
let res = ''
let i = 0
while(i >= 0 && i < maxLen) {
  flag = Number(num1[i]) + Number(num2[i]) + flag
  res = (flag % 10) + res
  flag = Math.floor(flag / 10)
  i ++ 
}
return flag === 1 ? '1' + res : res; 
}
// 数字反转
var reverseNumber = (number) => {
  let _num = String(number);
  let _result = '';
  for( let i = _num.length -1; i >= 0; i-- ){
      _result += _num.charAt(i)    
  }
  return (_result)
}