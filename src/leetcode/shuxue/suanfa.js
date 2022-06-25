/*
 * @Author: Chendapeng
 * @Date: 2021-08-31 22:49:40
 * @LastEditors: Chendapeng
 * @LastEditTime: 2021-09-05 12:00:05
 * @Description: 旋转数组
 */
var rotate = function(nums, k) {
  let n =  nums.length
  if ((k %= n) === 0) return
  k = k > n ? k % n : k;
  nums = nums.reverse()
  let arr = nums.slice(0, k)
  let arr2 = nums.slice(-(n-k))
  nums = [...arr.reverse(), ...arr2.reverse()]
  console.log(nums);
};

var rotate = function(nums, k) {
  k %= nums.length
  reverseNum(nums, 0, nums.length - 1)
  reverseNum(nums, 0, k - 1)
  reverseNum(nums, k, nums.length - 1)
};
var reverseNum = (nums, start, end) => {
  while(start < end) {
    [nums[start++], nums[end--]] = [nums[end], nums[start]]
  }
}

/**
 * 数组指定数量反转
 * @param {*} nums 
 * @returns 
 */
var reverseArr= (nums) => {
  let end = nums.length - 1;
  let start = 0
  while(start < end) {
      [nums[start++], nums[end--]] = [nums[end], nums[start]]
  }
  return nums
}
console.log(reverseArr([1,2,3,4]))

var reverseArr= (nums) => {
  let end = nums.length - 1;
  let start = 0
  while(start < end) {
    let temp = nums[end]
    nums[end] = nums[start]
    nums[start] = temp
    start ++
    end --
    // [nums[start++], nums[end--]] = [nums[end], nums[start]]
  }
  return nums
}
console.log(reverseArr([1,2,3,4]))
/**
 * 根据指定的开始和结束反转数组项
 */
 var reverseArr= (nums, start, end) => {
  while(start < end) {
    let temp = nums[end]
    nums[end] = nums[start]
    nums[start] = temp
    start ++
    end --
    // [nums[start++], nums[end--]] = [nums[end], nums[start]]
  }
  return nums
}
console.log(reverseArr([1,2,3,4], 0, 4))


// 数组中的项移位
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let j = 0
  for(let i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      let temp = nums[i]
      nums[i] = nums[j]
      nums[j++] = temp
    }
    console.log(nums, 'nums')
  }
};

// j 记录0的数量 j右边全是0
var moveZeroes = function(nums) {
  let j = 0
  for(let i = 0; i< nums.length; i++) {
    if (nums[i] != 0) {
      nums[j++] = nums[i]
    }
  }
  while( j < nums.length) {
    nums[j] = 0
    j++
  }
};

