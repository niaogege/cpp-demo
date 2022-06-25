/*
 * @Author: Chendapeng
 * @Date: 2022-01-11 16:02:44
 * @LastEditors: Chendapeng
 * @LastEditTime: 2022-01-11 17:43:36
 * @Description: 快乐数
 */

/**
 * 编写一个算法来判断一个数 n 是不是快乐数。
 * https://leetcode-cn.com/problems/happy-number/
  「快乐数」定义为：
  对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和。
  然后重复这个过程直到这个数变为 1，也可能是 无限循环 但始终变不到 1。
  如果 可以变为  1，那么这个数就是快乐数。
  如果 n 是快乐数就返回 true ；不是，则返回 false 。
  输入：n = 19
  输出：true
  解释：
  12 + 92 = 82
  82 + 22 = 68
  62 + 82 = 100
  12 + 02 + 02 = 1
 */
  // https://programmercarl.com/0202.%E5%BF%AB%E4%B9%90%E6%95%B0.html
/**
 * @param {number} n
 * @return {boolean}
 */
 var isHappy = function(n) {
  var str = '' + n;
  var m = new Map()
  let total = 0
  var digui = (str) => {
    for (let i = 0; i < str.length; i ++) {
      total += Math.pow(str[i], 2)
    }
    if (m.has(total) && total !== 1) {
      return false
    } else if (!m.has(total) && total === 1) {
      return true
    }
    m.set(total, total)
    digui('' + total)
  }
  return digui(str)
};
