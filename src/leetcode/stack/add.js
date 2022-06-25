/*
 * @Author: Chendapeng
 * @Date: 2021-09-11 14:16:23
 * @LastEditors: Chendapeng
 * @LastEditTime: 2021-09-12 15:50:17
 * @Description: 
 */
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
//  > https://leetcode-cn.com/problems/add-two-numbers-ii/
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
  let arr1 = []
  let arr2 = []
  while(l1) {
      arr1.push(l1.val)
      l1 = l1.next
  }
  while(l2) {
      arr2.push(l2.val)
      l2 = l2.next
  }
  let maxLen = Math.max(arr1.length, arr2.length)
  while(arr1.length.maxLen < maxLen || arr2.length < maxLen) {
      if (arr1.length < maxLen) {
        arr1.unshift(0)
      }
      if (arr2.length < maxLen) {
        arr2.unshift(0)
      }
  }
  var dummy = new ListNode()
  let pre= dummy
  let flag = 0
  let i = maxLen - 1
  while(i >= 0) {
    let total = arr1[i] + arr2[i] + flag
    pre.next = new ListNode(total % 10)
    pre = pre.next
    flag = Math.floor(total / 10)
    i--
  }
  return reverseNode(dummy.next)
};
function reverseNode(head) {
  let cur = head
  let pre = null
  while(cur) {
    let next = cur.next
    cur.next = pre
    pre = cur
    cur = next
  }
  return pre
}