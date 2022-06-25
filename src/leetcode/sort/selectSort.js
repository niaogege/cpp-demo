/*
 * @Author: Chendapeng
 * @Date: 2021-09-30 13:48:07
 * @LastEditors: Chendapeng
 * @LastEditTime: 2021-10-09 13:44:46
 * @Description: 选择排序
 */

/**
 * 最小的俩俩交换
 * 寻找最小的元素
 * 时间复杂度O(n^2)
 * 空间复杂度O(1)
 */
var SelectSort = (arr) => {
  var len = arr.length
  for(let i = 0; i < len - 1;i++) {
    let min = i
    for(let j = i+1;j < len; j++) {
      if(arr[min] >= arr[j]) {
        min = j
      }
    }
    [arr[min], arr[i]] = [arr[i],arr[min]]
  }
  return arr
} 
SelectSort([7,5,9,2,10])

// mock 插入排序
var InsertSort = (arr) => {
  let len = arr.length
  let cur,prev
  for(let i = 1; i < len;i++) {
    cur = arr[i]
    prev = i - 1
    while(
      prev >= 0 &&
      arr[prev] > cur
    ) {
      arr[prev+1] = arr[prev]
      prev --
    }
    arr[prev+1] = cur
  }
  return arr
}
InsertSort([3,1,22,111,5,76,1])