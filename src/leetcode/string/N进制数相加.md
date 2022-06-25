<!--
 * @Author: Chendapeng
 * @Date: 2021-09-11 11:05:06
 * @LastEditors: Chendapeng
 * @LastEditTime: 2021-09-15 11:49:19
 * @Description: 相加
-->
### 概况
[十进制两数相加](https://leetcode-cn.com/problems/add-strings/)
[二进制两数相加](https://leetcode-cn.com/problems/JFETK5/)
[链表式两数相加](https://leetcode-cn.com/problems/add-two-numbers/)

### 解题思路

![image.png](https://pic.leetcode-cn.com/1631329207-yOFUpM-image.png)

如果写过大数相加([字符串相加](https://leetcode-cn.com/problems/add-strings/))，你可能会这么写

```js
var addBinary = function(a, b) {
    let maxLen = Math.max(a.length,b.length)
    a = a.padStart(maxLen, '0')
    b = b.padStart(maxLen, '0')
    let flag = 0
    let res = ''
    let i = maxLen - 1
    while(i >= 0) {
        flag = Number(a[i]) + Number(b[i]) + flag
        res =  flag % 10 + res;
        flag = Math.floor(flag/10)
        i--
    }
    res = flag == 1 ? '1' + res : res
    return res
}
```
那如果换成二进制呢？是不是这样就好

### 代码

```javascript
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
let maxLen = Math.max(a.length,b.length)
    a = a.padStart(maxLen, '0')
    b = b.padStart(maxLen, '0')
    let flag = 0
    let res = ''
    let i = maxLen - 1
    while(i >= 0) {
        flag = Number(a[i]) + Number(b[i]) + flag
        res = flag % 2 + res;
        flag = Math.floor(flag/2)
        i--
    }
    res = flag == 1 ? '1' + res : res
    return res
};
```
细心的小伙伴已经看到端倪了，就是在取余和进位那里做了改变，其他的没动，所以我总结出一个N进制相加的通用方法

```js
/**
 * @param {string} a
 * @param {string} b
 * @param {number} radix 进制数
 * @return {string}
 */
var addBinary = function(a, b, radix) {
let maxLen = Math.max(a.length,b.length)
    a = a.padStart(maxLen, '0')
    b = b.padStart(maxLen, '0')
    let flag = 0
    let res = ''
    let i = maxLen - 1
    while(i >= 0) {
        flag = Number(a[i]) + Number(b[i]) + flag
        res = flag % radix + res;
        flag = Math.floor(flag/radix)
        i--
    }
    res = flag == 1 ? '1' + res : res
    return res
};
```

### 另外一种字符串相加

```js
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(a, b) {
    let l1 = a.length - 1
    let l2 = b.length - 1
    let flag = 0
    let res = ''
    while(l1 >= 0 || l2 >= 0) {
        let x = l1 >=0 ? + a[l1] : 0
        let y = l2 >=0 ? + b[l2] : 0
        flag = x + y + flag
        res = flag % 10 + res;
        flag = Math.floor(flag/10)
        l1--
        l2--
    }
    res = flag == 1 ? '1' + res : res
    return res
};
```

### 链表式两数相加
```js
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
    let dummy = new ListNode()
    let cur = dummy;
    let flag = 0
    while(l1 || l2) {
        let n1 = l1 && l1.val || 0
        let n2 = l2 && l2.val || 0
        let total = n1 + n2 + flag
        cur.next = new ListNode(total % 10)
        cur = cur.next
        l1 = l1 && l1.next
        l2 = l2 && l2.next
        flag = Math.floor(total / 10)
    }
    if (flag) {
        cur.next = new ListNode(flag)
    }
    return dummy.next
};
```