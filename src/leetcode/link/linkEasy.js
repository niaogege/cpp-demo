/*
 * @Author: Chendapeng
 * @Date: 2021-08-22 11:40:48
 * @LastEditors: Chendapeng
 * @LastEditTime: 2021-09-28 19:57:07
 * @Description: 简单级别的链表
 */
var test3 = {
  val: 4,
  next: {
    val: 1,
    next: {
      val: 8,
      next: {
        val: 1,
        next: {
          val: 4,
          next: null
        }
      }
    }
  }
}
 var middleNode = (head) => {
  if (!head) return []
  var fast = slow = head
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }
  return slow
 }
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  var res = []
  while(head) {
    res.push(head.val)
    head = head.next
  }
  let copy = res.slice().reverse().join()
  if(copy === res.join()) {
      return true
  }
  return false
};

var test = isPalindrome(test3)
console.log(test);

var isPalindrome = function(head) {
  var res = []
  let temp = head
  while(head) {
    res.push(head.val)
    head = head.next
  }
  while(res.length) {
    if (res.pop() != temp.val) {
      return false
    }
    temp = temp.next
  }
  return true
};

var isPalindrome = function(head) {
  var res = []
  while(head) {
    res.push(head.val)
    head = head.next
  }
  for(let i =0, j = res.length - 1; i <j; i ++, j--) {
    if (res[i] !== res[j]) {
      return false
    }
  }
  return true
};
var test3 = {
  val: 4,
  next: {
    val: 1,
    next: {
      val: 8,
      next: {
        val: 2,
        next: {
          val: 4,
          next: null
        }
      }
    }
  }
}
/**
 *  删除链表中的节点
 */
  var deleteNode = function(head, val) {
    let cur = head
    let pre = {
      val: 0,
      next: null
    }
    let temp = pre
    while(cur) {
        pre.next = cur
        let next = cur.next
        if (next && next.val == val && next.next) {
          cur.next = next.next
          cur = next.next
        } else {
          cur = next
        }
        pre = pre.next
    }
    return temp.next
  };
var test = deleteNode(test3, 4)
console.log(test);

/**
 * 哑节点
 * @param {*} head 
 * @param {*} val 
 * @returns 
 */
var deleteNode = function(head, val) {
  let dummy = {
    val: 0,
    next: null
  }
  dummy.next = head
  let cur = dummy
  while(cur.next) {
    if (cur.next.val == val) {
      cur.next = cur.next.next;
      break
    }
    cur = cur.next
  }
  return dummy.next
};

var reverseLink = (node) => {
  let pre
  let cur = node
  while(cur) {
    let Next = node.next
    node.next = pre
    pre = cur
    cur = Next
  }
  return pre
}