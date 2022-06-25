/*
 * @Author: Chendapeng
 * @Date: 2021-12-07 15:19:57
 * @LastEditors: Chendapeng
 * @LastEditTime: 2021-12-28 18:50:03
 * @Description: 
 */
var isEqual = (arr) => {
  var m = new Map()
  var res = false
  var pre, next
  for(let i = 1; i< arr.length; i ++) {
      var cur = arr[i]
      pre = arr[i - 1]
      next = arr[i + 1]
      if (pre === cur || cur === next || pre === next) continue
      if (pre !== cur && cur !== next && pre !== next) {
        return true
      }
  }
  return false
}
isEqual([2, 2, 2, 2, 2, 2, 1, 3, 1, 1, 1, 3, 3, 3, 3, 3])

/**
 * https://leetcode-cn.com/problems/minimum-size-subarray-sum/
 * 长度最小的数组
 *  
 *  输入：target = 7, nums = [2,3,1,2,4,3]
    输出：2
    解释：子数组 [4,3] 是该条件下的长度最小的子数组。
    
    输入：target = 4, nums = [1,4,4]
    输出：1
 */
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
 var minSubArrayLen = function(target, nums) {
    let min = nums.length + 1;
    let l = 0
    let r = 0
    let len = nums.length
    let total = 0
    while(r < len) {
      total += nums[r++]
      while(total >= target) {
        min = Math.min(min, r - l)
        total -= nums[l++]
      }
    }
    return min > len ? 0: min;
};

var minSubArrayLen2 = function(target, nums) {
  let len = nums.length
  let min = len + 1;
  let l = 0
  let total = 0
  for (let r = 0; r < len; r ++) {
    total += nums[r]
    while(total >= target) {
      min = Math.min(min, r - l + 1)
      total -= nums[l++]
    }
  }
  return min > len ? 0: min;
};