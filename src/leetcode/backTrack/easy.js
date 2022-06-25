/*
 * @Author: Chendapeng
 * @Date: 2021-10-15 21:50:39
 * @LastEditors: Chendapeng
 * @LastEditTime: 2021-11-16 09:53:32
 * @Description: 回溯1
 */

// https://leetcode-cn.com/problems/permutations/solution/dai-ma-sui-xiang-lu-dai-ni-xue-tou-hui-s-mfrp/
// 全排列
var permute = function(nums) {
  var res = []
  var backTrack = (nums, path) => {
      if(nums.length === path.length) {
          res.push(path)
          return 
      }
      for(let i = 0; i < nums.length; i++) {
        if (!path.includes(nums[i])) {
          path.push(nums[i])
          backTrack(nums, path.slice())
          path.pop()
        }
      }
  }
  backTrack(nums, [])
  return res
};

// https://leetcode-cn.com/problems/combinations/
// 给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。

// 示例:
// 输入: n = 4, k = 2
// 输出:
// [
// [2,4],
// [3,4],
// [2,3],
// [1,2],
// [1,3],
// [1,4],
// ]
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
 var combine = function(n, k) {
  var res = []
  var backTrack = (start, path) => {
      if(path.length === k) {
          res.push(path)
          return false
      }
      for (let i = start; i <= n; i++) {
          path.push(i)
          backTrack(i+1, path.slice())
          path.pop()
      }
  }
  backTrack(1, [])
  return res
};

/** 组合2
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 var combinationSum2 = function(candidates, target) {
  candidates.sort()
  var res = [],path = []
  var backTrack = (sum, start) => {
      if (sum > target) return false
      if (sum === target) {
          res.push(path.slice())
      }
      for(let i = start; i< candidates.length;i++) {
          if(i > start && candidates[i] === candidates[i - 1]) continue
          path.push(candidates[i])
          backTrack(sum + candidates[i], i+1)
          path.pop()
      }
  }
  backTrack(0, 0)
  return res;
};