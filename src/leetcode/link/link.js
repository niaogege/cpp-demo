/*
 * @Author: Chendapeng
 * @Date: 2021-08-18 21:28:54
 * @LastEditors: Chendapeng
 * @LastEditTime: 2021-10-09 09:54:01
 * @Description:  链表
 */

var reverseListCopy = (head) => {
  let cur = head
  let pre = null
  while(cur) {
    let next = cur.next
    cur.next = pre
    pre = cur
    cur = next
  }
}


var Test = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: null
      }
    }
  }
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
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
 var test = reverseList(Test)
 console.log(test);


 /**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
  if (left === right) {
    return head
  }
  /**
   * 找到具体的开始和结束抽出来 先反转
   * 然后在根据插入位置的起始点插入到链表中
   */
};


/**
 * 链表反转
 * @param {*} head 
 * @returns 
 */
 const reverseLink = (head) => {
  let cur = head
  let pre = null;
  while(cur) {
    const next = cur.next
    cur.next = pre
    pre = cur
    cur = next
  }
  return pre
}

/**
 * 两两交换
 */
 var swapPairs = function(head) {
   let cur = head
   while(cur) {
     const next = cur.next
     const Nnext = cur.next.next
     next.next = cur
     if (Nnext) {
       cur = Nnext
     }
   }
   return cur
 };

 var swapPairs = function(head) {
   let pre = null
   pre.next = head
   while(pre.next && pre.next.next) {
     let a = pre.next
     let b = a.next
     pre.next = b
     b.next = a
     a.next = b.next
     pre = a
   }
   return cur
 };
//  https://leetcode-cn.com/problems/swap-nodes-in-pairs/solution/liang-liang-jiao-huan-lian-biao-zhong-de-jie-di-91/
 var Test = {
   val: 1,
   next: {
     val: 2,
     next: {
       val: 3,
       next: {
         val: 4,
         next: {
           val: 2, 
           next: null
         }
       }
     }
   }
 }
