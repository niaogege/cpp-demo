/*
 * @Author: Chendapeng
 * @Date: 2021-09-30 13:48:24
 * @LastEditors: Chendapeng
 * @LastEditTime: 2021-11-12 10:31:14
 * @Description: 插入排序
 */

/**
 * 从第2个开始排序，最小的就放前面
 * @param {*} arr
 * 时间复杂度O(n^2)
 * 空间复杂度O(1)
 * 不稳定
 */
var InsertSort = (arr) => {
  var len = arr.length
  let prev,cur
  for(let i = 1; i<len;i++) {
    cur = arr[i]
    prev = i - 1
    while(
      prev >= 0 &&
      arr[prev] > cur
    ) {
      arr[prev+1] = arr[prev]
      prev--
    }
    arr[prev+1] = cur
  }
  return arr
}
var arr = [3,2,11,2,9,10]
InsertSort(arr)

/**
 * 选择排序跟插入排序 老是混淆
 */

