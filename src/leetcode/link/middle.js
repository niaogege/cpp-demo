/*
 * @Author: Chendapeng
 * @Date: 2021-08-22 22:12:09
 * @LastEditors: Chendapeng
 * @LastEditTime: 2021-09-04 19:55:18
 * @Description: 
 * 
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
var test = {
  val: 4,
  next: {
    val: 5,
    next: {
      val: 4
    }
  }
}
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
  let temp = head
  let stack = []
  let pre = {
    val: 0, next: null
  }
  while(temp) {
      stack.push(temp.val)
      temp = temp.next
  }
  stack.splice(stack.length - n, 1)
  for(let i =0; i < stack.length; i++) {
    pre.next = {
      val: stack[i],
      next: null
    }
    pre = pre.next
  }
  return pre.next
};
var Test = removeNthFromEnd(test, 1)
console.log(Test);


var deleteNode = (head, val) => {
  let dummy = {
    val: 0,
    next: null
  }
  dummy.next = head
  let cur = dummy
  while(cur.next) {
    const next = cur.next
    if (next.val === val) {
        cur.next = next.next;
        break;
    }
    cur = next
  }
  return dummy.next
}

/**
 * 删除倒数第N个节点
 * 快慢指针知道倒数第N个
 */
 var removeNthFromEnd = function(head, n) {
   let dummy = {
     val: 0,
     next: null
   }
   dummy.next = head
   let slow = dummy;
   let fast = dummy;
   // 快节点先跑
   while(n --) {
    fast = fast.next
   }
   // 快慢一起走
   while(fast.next) {
     slow = slow.next
     fast = fast.next
   }
   // 找到删除节点的前驱节点
   slow.next = slow.next.next
   return dummy.next
 }
 var test = {
  val: 4,
  next: {
    val: 5,
    next: {
      val: 4,
      next: {
        val: 8,
        next: null
      }
    }
  }
}
var Test = removeNthFromEnd(test, 2)
console.log(Test);

/**
 * 删除多个指定的节点
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
 var removeElements = function(head, val) {
  let dummy = {
    val: -1,
    next: null
  }
  dummy.next = head
  let pre = dummy
  let stack = []
  while(head) {
    if (head.val !== val) {
      stack.push(head.val)
    }
    head = head.next
  }
  for (let i=0; i < stack.length; i++) {
    pre.next = {
      val: stack[i],
      next: null
    }
    pre = pre.next
  }
  return dummy.next
};

var removeElements = (head, val) => {
  let dummy = {
    val: 0,
    next: null
  }
  dummy.next = head
  let cur = dummy
  while(cur.next) {
    const next = cur.next
    if (next.val === val) {
      cur.next = next.next;
    } else {
      cur = next
    }
  }
  return dummy.next
}

var test = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: {
            val: 6,
            next: null
          }
        }
      }
    }
  }
}
var middleNode = function(head) {
  var dummy = {
    val: 0,
    next: null
  }
  dummy.next = head
  let slow = dummy
  let fast = dummy
  while(fast.next) {
      fast = fast.next.next
      slow = slow.next
  }
  return slow
};
var Test = middleNode(test)
console.log(Test);


var test1 = {
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
var test2 = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 5,
        next: null
      }
    }
  }
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 * 合并两个有序链表
 */
 var mergeTwoLists = function(l1, l2) {
  let head = {
      val: -1,
      next: null
  }
  let pre = head
  while(l1 && l2) {
      if (l1.val > l2.val) {
          pre.next = l2
          l2 = l2.next
      } else {
          pre.next = l1;
          l1 = l1.next
      }
      pre = pre.next
  }
  console.log(l1, '111');
  console.log(l2, '222');
  pre.next = l1 || l2
  return head.next
};
var Test = mergeTwoLists(test1, test2)
console.log(Test, 'Test');


/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var sortList = function(head) {
  let dummy = {
      val: -1,
      next: null
  }
  let pre = dummy
  let stack = []
  while(head) {
    stack.push(head.val)
    head = head.next
  }
  stack = stack.sort((a, b) => a - b)
  for(let i = 0; i < stack.length; i ++) {
    pre.next = {
      val: stack[i],
      next: null
    }
    pre = pre.next
  }
  return dummy.next
};

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var mergeTwoLists = function(l1, l2) {
  if (l1 == null) {
      return l2
  } else if (l2 == null) {
      return l1
  } else if (l1.val <= l2.val) {
      l1.next = mergeTwoLists(l1.next, l2)
      return l1
  } else if (l1.val > l2.val) {
      l2.next = mergeTwoLists(l1, l2.next)
      return l2
  }
};

var test1 = {
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
var reorderList = function(head) {
  let dummy = {
      val: -1,
      next: null
  }
  let pre = dummy
  let stack = []
  while(head) {
      stack.push(head.val)
      head = head.next
  }
  let last = stack.pop()
  stack.splice(1, 0 ,last)
  console.log(stack, 'stack')
  for(let i = 0; i < stack.length; i ++) {
      pre.next = {
          val: stack[i],
          next: null
      }
      console.log(pre.next, 'pre.next')
      pre = pre.next
      console.log(pre, 'pre')
  }
  console.log(dummy.next)
  return dummy.next
};
var TT = reorderList(test1)
console.log(TT);

var test1 = {
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
var reorderList = function(head) {
  let pre = head
  let stack = []
  while(pre) {
    stack.push(pre)
    pre = pre.next
  }
  let left = 1
  let right = stack.length - 1
  while(left <= right) {
    head.next = stack[right]
    right--
    head = head.next
    console.log(head, '11');
    head.next = stack[left]
    left++
    head = head.next
  }
  head.next = null
}
reorderList(test1)
console.log(test1)

//   删除链表的倒数第N个节点

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
  let dummy = {
      val: -1,
      next: null
  }
  let pre = dummy
  let arr = []
  while(head) {
      arr.push(head.val)
      head = head.next
  }
  arr.splice(arr.length - n, 1)
  while(arr.length) {
      pre.next = {
          val: arr.shift(),
          next: null
      }
      pre = pre.next
  }
  return dummy.next
};


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
  if (head == null) return head
  let slow = head
  let fast = head
  while(n > 0) {
      fast = fast.next
      n --
  }
  if(fast == null) {
    return head.next
  }
  while(fast && fast.next) {
      fast = fast.next
      slow = slow.next
  }
  slow.next = slow.next.next
  return head
};