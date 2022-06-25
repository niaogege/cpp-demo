/**
 * 链表两两交换
 * @param {*} head 
 * @returns 
 */
var SwapPairs = (head) => {
  var pre = {
    val: 0,
    next: null
  }
  pre.next = head
  let temp = pre
  while(temp.next && temp.next.next) {
    var n1 = temp.next
    var n2 = temp.next.next
    temp.next = n2
    n1.next = n2.next
    n2.next = n1
    temp = n1
  }
  return pre.next
}

var test = SwapPairs(Test)
console.log(test);


/**
 * 快慢指针
 * @param {ListNode} head
 * @return {boolean}
 */
 var hasCycle = function(head) {
    var slow = head
    var fast = head
    while(slow && fast && fast.next) {
      if (slow.val == fast.val) {
        return true
      }
      slow = slow.next
      fast = fast.next.next
    }
    return false
};
/**
 * 标记法
 * @param {*} head 
 * @returns 
 */

var hasCycle2 = function(head) {
  let cur = head
  while(cur) {
      if (cur.flag) return true
      cur.flag = true
      cur = cur.next
  }
  return false
};

// hash
var hasCycle3 = function(head) {
  let cur = head
  let map = new Map()
  while(cur) {
    if (map.has(cur)) {
      return true
    }
    map.set(cur, cur)
    cur = cur.next
  }
  return false
};

 /**
  * 两两交换
  */
  var swapPairs = function(head) {
    let pre = {
      val: 0,
      next: null
    }
    pre.next = head
    let temp = pre
    while(temp.next && temp.next.next) {
      const n1 = temp.next
      const n2 = temp.next.next
      temp.next = n2
      n1.next = n2.next
      n2.next = n1
      temp = n1
    }
    return pre
  };

// 看到第六章 视频
/**
 * 返回相交链表的节点
 * A： 4 - 1 - 8 - 4 - 5
 * B： 5 - 0 - 1 - 8 - 4 - 5
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
 var getIntersectionNode = function(headA, headB) {
  // 遍历A 在遍历的过程中在遍历B。找到一样的即可
  let curA = headA
  let curB = headB
  while(curA) {
    let val = curA.val
    while(curB && curB.val) {
      if (val === curB.val) {
        return val
      }
      curB = curB.next
    }
    curA = curA.next
  }
  return null  
};


var test2 = {
  val: 5,
  next: {
    val: 0,
    next: {
      val: 1,
      next: {
        val: 8,
        next: {
          val: 4,
          next: {
            val: 5,
            next: null
          }
        }
      }
    }
  }
}

/**
 * 哈希表 Set
 * @param {*} headA 
 * @param {*} headB 
 */
var getIntersectionNode2 = (headA, headB) => {
  var mapSet = new Set()
  var temp = headA
  while(temp) {
    mapSet.add(temp)
    temp = temp.next
  }
  temp = headB
  while(temp) {
    if (mapSet.has(temp)) {
      return temp
    }
    temp = temp.next
  }
  return null;
}
var TT = getIntersectionNode(test2, test3)
console.log(TT)

/**
 * 给定一个链表，返回链表开始入环的第一个节点。 
 * 从链表的头节点开始沿着 next 指针进入环的第一个节点为环的入口节点。如果链表无环，则返回 null
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var detectCycle = function(head) {
  let M = new Map()
  let cur = head
  while(cur && cur.next) {
      if (M.has(cur)) {
          return cur
      }
      M.set(cur, cur)
      cur = cur.next
  }
  return cur
};

/**
 * 链表 从尾到头打印链表
 * 输入：head = [1,3,2]
 * 输出：[2,3,1]
 */

 var reversePrint = function(head) {
  let cur = head
  let pre = null
  let res = []
  while(cur) {
      let next = cur.next
      cur.next = pre
      pre = cur
      cur = next
  }
  while(pre) {
      if(pre && pre.val != null) {
          res.push(pre.val)
      }
      pre = pre.next
  }
  return res
};

var reversePrint2 = (head) => {
  let res = []
  while(head) {
    if (head.val != null) {
      res.unshift(head.val)
    }
    head = head.next
  }
  return res
}
var test3 = {
  val: 4,
  next: {
    val: 1,
    next: {
      val: 8,
      next: {
        val: 4,
        next: {
          val: 7,
          next: null
        }
      }
    }
  }
}
var rp = reversePrint(test3)
console.log(rp);
var getKthFromEnd = function(head, k) {
  let res = []
  let cur = head
  let pre = head
  while(cur && cur.val != null) {
      res.push(cur && cur.val)
      cur = cur.next
  }
  for (let i = 0; i < res.length; i++) {
      if (i == (res.length - k)) {
          return pre
      }
      pre = pre.next
  }
};
/**
 * 双指针
 * @param {*} head 
 * @param {*} k 
 */
var getKthFromEnd2 = (head, k) => {
  var fast = head
  var slow = head
  while( k-- > 0) {
    fast = fast.next
  }
  while(fast != null) {
    fast = fast.next
    slow = slow.next
  }
  return slow
}
/**
 * 出栈 stack.pop()
 */

 var getKthFromEnd3 = (head, k) => {
  let stack = []
  let ans;
  while(head) {
    stack.push(head)
    head = head.next
  }
  while(k) {
    ans = stack.pop()
    k--
  } 
  return ans
 }

 /**
  * 合并两个有序链表
  * 第一种思路 链表拍平 然后排序 在组成链表
 /**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  let res= []
  while(l1) {
    res.push(l1.val)
    l1 = l1.next
  }
  while(l2) {
    res.push(l2.val)
    l2 = l2.next
  }
  let arr = res.sort((a, b) => a - b);
  let temp = {
    val: 0,
    next: null
  }
  let pre= temp
  while(arr.length) {
    pre.next = {
      val: arr.shift(),
      next: null
    }
    pre = pre.next
  }
  return temp.next
};
var all = mergeTwoLists(test1, test2)

var test1 = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 4,
      next: null
    }
  }
}
var test2 = {
  val: 1,
  next: {
    val: 3,
    next: {
      val: 4,
      next: null
    }
  }
}
/**
 * 不知道咋说
 */
var mergeTwoLists3 = (h1, h2) => {
  let head = {
    val: 0,
    next: null
  };
  let pre = head
  while(h1 && h2) {
    if (h1.val > h2.val) {
      pre.next = h2
      h2 = h2.next
    } else {
      pre.next = h1
      h1 = h1.next
    }
    pre = pre.next
  }
  pre.next = h1 === null ? h2 : h1;
  return head.next
}
var test = mergeTwoLists(test1, test2)
console.log(test);