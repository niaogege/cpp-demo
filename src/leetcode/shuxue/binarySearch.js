/*
 * @Author: Chendapeng
 * @Date: 2021-09-04 17:19:53
 * @LastEditors: Chendapeng
 * @LastEditTime: 2021-09-04 17:55:14
 * @Description:  二分查找
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
  let left = 0
  let right = nums.length - 1
  while(left <= right) {
      let mid = (right + left) >> 1
      if (nums[mid] === target) {
        return mid
      } else if (nums[mid] > target) {
        right = mid - 1 
      } else {
        left = mid + 1
      }
  }
  return -1
};
