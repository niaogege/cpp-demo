/*
 * @Author: Chendapeng
 * @Date: 2021-12-08 14:02:21
 * @LastEditors: Chendapeng
 * @LastEditTime: 2021-12-08 14:21:01
 * @Description: 中等哈希表题目
 */

/**
 * 
 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。
 注意：答案中不可以包含重复的三元组。
 三数之和
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
  nums.sort((a, b) => a - b)
  let right = nums.length - 1
  let left = 0
  let res = []
  for(let i = 0 ; i < nums.length; i ++) {
      let cur = nums[i]
      let sum = cur + nums[left] + nums[right]
      console.log(cur, nums[left], nums[right])
      console.log(sum, 'sum')
      if (sum === 0) {
        res.push([cur, nums[left], nums[right]])
      } else if (sum > 0) {
        right --
      } else if (sum < 0) {
        left ++
      }
  }
  return res
};