/*
 * @Author: Chendapeng
 * @Date: 2021-08-26 13:48:50
 * @LastEditors: Chendapeng
 * @LastEditTime: 2021-08-28 20:30:18
 * @Description: 栈相关的题目 干掉栈以及队列
 */

// 有效的括号
// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
/**
 * 输入：s = "()[]{}"
 * 输出：true
 */
/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    var M = new Map()
    M.set('{', '}')
    M.set('(', ')')
    M.set('[', ']')
    if (s && s.length < 2) {
      return false
    }
    s = s.split('')
    let pre = s.slice()
    while(pre.length) {
      stack.push(pre.shift())
      if (M.get(stack.pop()) === pre.shift()) {
        return true
      }
    }
    for (let i = 0, j = s.length - 1; i <= j; i++, j--) {
      stack.push()
      if (M.get(s[i]) !== s[j]) {
        return false
      }
    }
    return false
};
var isValid = function(s) {
  s = s.split('')
  if(s.length % 2) return false
  let stack = []
  let S = new Map([
    [')', '('],
    ['}', '{'],
    [']', '[']
  ])
  for (let i of s) {
    if(S.has(i)) {
      if (stack[stack.length - 1] != S.get(i)) {
        return false
      } else {
        stack.pop()
      }
    } else {
      stack.push(i)
    }
  }
  return !stack.length
}
isValid('{}()[]')

/**
 * Initialize your data structure here.
 * 两个栈实现队列
 */
 var MyQueue = function() {
  this.stackA = []
  this.stackB = []
};

/**
* Push element x to the back of queue. 
* @param {number} x
* @return {void}
*/
MyQueue.prototype.push = function(x) {
  this.stackA.push(x)
};

/**
* Removes the element from in front of queue and returns that element.
* @return {number}
*/
MyQueue.prototype.pop = function() {
  if (!this.stackB.length) {
      this.stackA.push(this.stackA.pop())
  }
  return this.stackB.pop()
};

/**
* Get the front element.
* @return {number}
*/
MyQueue.prototype.peek = function() {
  if (!this.stackB.length) {
      this.stackA.push(this.stackA.pop())
  }
  return this.stackB[this.stackB.length - 1]
};

/**
* Returns whether the queue is empty.
* @return {boolean}
*/
MyQueue.prototype.empty = function() {
  return this.stackA.length === 0 && this.stackB.length === 0
};

/**
* Your MyQueue object will be instantiated and called as such:
* var obj = new MyQueue()
* obj.push(x)
* var param_2 = obj.pop()
* var param_3 = obj.peek()
* var param_4 = obj.empty()
*/


/**
 * 大数相加
 */
var addSum = (a, b) => {
  let maxLength = Math.max(a.length, b.length)
  a = a.padStart(maxLength, '0')
  b = b.padStart(maxLength, '0')
  let flag = 0
  let res = ''
  let i = maxLength - 1
  while( i>=0 ) {
    flag = Number(a[i]) + Number(b[i]) + flag
    res = (flag % 10) + res
    flag = Math.floor(flag/10)
    i--
  }
  return flag === 1 ? '1' + res : res
}

/**
 * [1,2,1,2,3],打印出1和2，出现的次数是2；
 * [1,2,5,5,5],打印5，出现的次数是3
 */
　var nums = (nums) => {
  let stack = []
  let arr = []
  for(let [index, i] of nums.entries()) {
    if(!stack.includes(i)) {
      stack.push(i)
    } else {
      let arrMin = []
      if () {

        arrMin.push(i)
      }
      arr.push(arrMin)
    }
  }
}
