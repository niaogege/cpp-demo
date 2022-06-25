/*
 * @Author: Chendapeng
 * @Date: 2021-08-29 14:48:24
 * @LastEditors: Chendapeng
 * @LastEditTime: 2021-08-29 15:00:28
 * @Description:  二分查找
 */

/**
 [二分查找](https://leetcode-cn.com/problems/search-insert-position/submissions/)
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
  let left = 0
    let right = nums.length - 1
    while(left <= right) {
      if (target === nums[left]) {
        return left
      } else if (target === nums[right]) {
        return right
      }  else if (target > nums[right]) {
        return ++ right
      } else if (target < nums[left]) {
        return 0
      } else if (target > nums[left]) {
        left ++
        if (nums[left] >= target) {
          return left
        }
      } else if (target < nums[right]) {
        right --
        if (nums[right] <= target) {
          return right
        }
      }
    }
  };
searchInsert([1,3,5,6], 7)