/*
 * @Author: Chendapeng
 * @Date: 2021-09-30 13:38:05
 * @LastEditors: Chendapeng
 * @LastEditTime: 2021-11-12 09:39:22
 * @Description: 冒泡排序
 * https://juejin.cn/post/6844903444365443080#heading-4
 */

/**
 * 双层循环
 * @param {*} arr 
 * @returns
 * 时间复杂度O(n^2)
 * 空间复杂度O(1)
 * 稳定 
 */
var BubbleSort = (arr) => {
  for (let i = 0 ; i < arr.length;i ++) {
    for(let j = 0; j < arr.length - i - 1;j ++) {
      if (arr[j] > arr[j+1]) {
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
      }
    }
  }
  return arr
}
var arr = [3,2,11,2,9,10]
BubbleSort(arr)

// 11 12
var bubbleSort = (arr) => {
  for(let i = 0; i < arr.length;i ++) {
    for(let j = 0; j < arr.length - i - 1;j++) {
      if(arr[j] > arr[j + 1]) {
        [arr[j+1], arr[j]] = [arr[j], arr[j+1]]
      }
    }
  }
  return arr
}
bubbleSort([3,5,1,2,33,111,8])

var selectSort = (arr) => {
  let len = arr.length;
  for(let i = 0; i < len; i++) {
    let min = i
    for(let j = i; j < len;j++) {
      if (arr[min] >= arr[j]) {
        min = j
      }
    }
    [arr[min], arr[i]] = [arr[i], arr[min]]
  }
  return arr
}
selectSort([333,1,2,333,11,2,99])