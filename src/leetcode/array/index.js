/*
 * @Author: Chendapeng
 * @Date: 2021-12-07 23:17:15
 * @LastEditors: Chendapeng
 * @LastEditTime: 2021-12-07 23:31:10
 * @Description: 
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
  let mid = 0
  while(nums.length) {
      mid = Math.floor(nums.length / 2)
      if (nums[mid] === target) {
          return mid
      } else if (nums[mid --] > target) {
          nums = nums.slice(0, mid)
      } else if (nums[mid ++] < target) {
          nums = nums.slice(mid)
      }
  }
  return -1
};

var search2 = function(nums, target) {
  let left = 0
  let right = nums.length - 1
  while(right >= left) {
      if (target === nums[right]) {
          return right
      } else if (target > nums[left]) {
          left ++
      } else if (target < nums[right]) {
          right --
      }
  }
  return -1
};

//  真正的二分查找
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search3 = function(nums, target) {
  let left = 0
  let right = nums.length - 1
  while(right >= left) {
      let mid = right + left >> 1
      if (target === nums[mid]) {
          return mid
      } else if (target > nums[mid]) {
          left  = mid + 1
      } else if (target < nums[mid]) {
          right = mid - 1
      }
  }
  return -1
};