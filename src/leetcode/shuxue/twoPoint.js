/*
 * @Author: Chendapeng
 * @Date: 2021-09-04 15:56:43
 * @LastEditors: Chendapeng
 * @LastEditTime: 2021-09-04 17:03:24
 * @Description:  双指针问题
 */
// https://leetcode-cn.com/problems/two-sum-ii-input-array-is-sorted/

// 双循环 O(n^2)
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(numbers, target) {
  if(numbers.length === 2) {
      return [1,2]
  }
  for(let i = 0; i < numbers.length; i++) {
    for(let j = i +1; j< numbers.length;j++) {
      if (j !== i && numbers[i]+ numbers[j] === target) {
        return [j+1, i+1]
      }
    }     
  }
};
twoSum([2,3,4], 6)


/**
 * 双指针解法
 * @param {}} numbers 
 * @param {*} target 
 * @returns 
 */
var twoSum2 = function(nums, target) {
  let start = 0
  let end = nums.length-1
  while(start < end) {
    let total = nums[start] + nums[end]
    if ( total === target) {
      return [start+1, end+1]
    } else if (target > total) {
      start++
    } else {
      end--
    }
  }
};
twoSum([2,3,4], 6)
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
  let j = 0
  for(let i = 0; i< nums.length; i++) {
    if (nums[i] != 0) {
        let temp = nums[i]
        nums[i] = nums[j]
        nums[j++] = temp
    }
  }
};
var moveZeroes = function(nums) {
  let j = 0
  for(let i = 0; i< nums.length; i++) {
    if(nums[i] !== 0) {
      nums[j++] = nums[i]
    }
  }
  while(j < nums.length) {
    nums[j] = 0
    j++
  }
  console.log(nums);
};
