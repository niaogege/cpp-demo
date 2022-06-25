/*
 * @Author: Chendapeng
 * @Date: 2021-12-23 22:38:51
 * @LastEditors: Chendapeng
 * @LastEditTime: 2021-12-23 22:44:23
 * @Description: 滑动窗口
 */
// https://leetcode-cn.com/problems/minimum-size-subarray-sum/
// 长度最小的子数组
/**
 * 给定一个含有 n 个正整数的数组和一个正整数 target 。

找出该数组中满足其和 ≥ target 的长度最小的 连续子数组 [numsl, numsl+1, ..., numsr-1, numsr] ，并返回其长度。如果不存在符合条件的子数组，返回 0 
 */

// 最初的答题
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
 var minSubArrayLen = function(target, nums) {
  var res = []
  var total = 0 
  var min = nums.length;
  for (let i = 0; i< nums.length; i++) {
      res.push(nums[i])
      total = res.reduce((a,b) => a + b)
      console.log(total, 'total')
      if (total >= target) {
          min = Math.min(min, res.length)
      } else {
          total = 0
          res.splice(0,1)
      }
  }
  return min
};
// 正解
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen2 = function(target, nums) {
  const len = nums.length
  var res = len+1
  let l = 0;
  let r = 0;
  let sum = 0;
  while(r < len) {
    sum += nums[r++]
    if (target <= sum) {
      res = Math.min(l-r, res)
      sum = nums[l++]
    }
  }
  return res > len ? 0 : res
};