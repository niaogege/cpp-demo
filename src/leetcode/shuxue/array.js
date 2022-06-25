/*
 * @Author: Chendapeng
 * @Date: 2021-09-22 21:20:31
 * @LastEditors: Chendapeng
 * @LastEditTime: 2021-12-29 08:29:14
 * @Description: 
 */
/**
 * 找出数组中出现次数最多的数字，
如[1,2,1,2,3],打印出1和2，出现的次数是2；
[1,2,5,5,5],打印5，出现的次数是3
 */
var arr = [1,2,1,2,3]
var arr = [1,2,5,5,5]
var printMore = (arr) => {
  if (!arr.length) return [[], 0]
  let m = new Map()
  let max = 0
  for (let item of arr) {
    if (m.has(item)) {
      m.set(item, m.get(item) + 1)
    } else {
      m.set(item, 1)
    }
    max = Math.max(m.get(item), max)
  }
  let res = []
  for (let [key, value] of m) {
    if (max === value) {
      res.push(key)
    }
  }
  return [res, max]
}
printMore(arr) // [[5], 3]


// 矩阵 https://leetcode-cn.com/problems/spiral-matrix-ii/
/**
 * 给你一个正整数 n ，生成一个包含 1 到 n2 所有元素，且元素按顺时针顺序螺旋排列的 n x n 正方形矩阵 matrix 。
 * 输入：n = 3
   输出：[[1,2,3],[8,9,4],[7,6,5]]
   
 */

/**
 * @param {number} n
 * @return {number[][]}
 */
 var generateMatrix = function(n) {

};