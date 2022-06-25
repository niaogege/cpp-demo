/*
 * @Author: Chendapeng
 * @Date: 2021-09-29 14:42:41
 * @LastEditors: Chendapeng
 * @LastEditTime: 2021-10-09 11:02:04
 * @Description: 归并排序
 */
// 输入：nums = [5,2,3,1]
// 输出：[1,2,3,5]
/**
 * 分治思想
 * @param {number[]} nums
 * @return {number[]}
 * 空间复杂度O(nlogn)
 * 时间复杂度O(n)
 * 稳定
 */
 var sortArray = function(nums) {
  const merge = (left, right) => {
    const res = []
    let i = 0
    let j = 0
    while(
      i < left.length &&
      j < right.length
    ) {
      if (left[i] < right[j]) {
        res.push(left[i++])
      } else {
        res.push(right[j++])
      }
    }
    while(i < left.length) {
      res.push(left[i++])
    }
    while(j < right.length) {
      res.push(right[j++])
    }
    return res
  }
  const sort = (arr) => {
    if (arr.length === 1) return arr
    let mid = Math.floor(arr.length / 2)
    let left = arr.slice(0, mid)
    let right = arr.slice(mid)
    return merge(sortArray(left), sortArray(right))
  }
  return sort(nums)
};
sortArray([7,5,9,2,10])

// 1008归并排序
var mergeSort2 = (arr) => {
  const merge = (right, left) => {
    let res = []
    let i = 0,j = 0
    while(
      i < left.length &&
      j < right.length
    ) {
      if (left[i] < right[j]) {
        res.push(left[i++])
      } else {
        res.push(right[j++])
      }
    }
    while(i < left.length) {
      res.push(left[i++])
    }
    while(j < right.length) {
      res.push(right[j++])
    }
    return res
  }
  const sort = (arr) => {
    if (arr.length === 1) return arr
    var mid = Math.floor(arr.length/2)
    var left = arr.slice(0, mid)
    var right = arr.slice(mid)
    console.log(left, right);
    return merge(mergeSort2(left), mergeSort2(right))
  }
  return sort(arr)
}
mergeSort2([3,11,2,9,10,12,111])

var bubbleSort = (arr) => {
  for(let i = 0; i< arr.length;i++) {
    for(let j = i; j < arr.length - i - 1;j++) {
      if (arr[j] > arr[j+1]) {
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
      }
    }
  }
  return arr
}
bubbleSort([3,11,2,9,10,12,111])

/**
 * 合并两个数组，从小到大排序
 */
var TwoArr = (right = [], left = []) => {
  let res = []
  let i = 0,j = 0
  while(
    i < left.length &&
    j < right.length
  ) {
    if(left[i] <= right[j]) {
      res.push(left[i++])
    } else {
      res.push(right[j++])
    }
  }
  while(i < left.length) {
    res.push(left[i++])
  }
  while(j < right.length) {
    res.push(right[j++])
  }
  return res
}
TwoArr([34,4,1,22,3,8], [6,1,2,11,66,555])