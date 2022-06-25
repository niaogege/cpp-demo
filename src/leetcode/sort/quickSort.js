/*
 * @Author: Chendapeng
 * @Date: 2021-10-09 10:17:45
 * @LastEditors: Chendapeng
 * @LastEditTime: 2021-10-09 10:24:40
 * @Description: 快速排序
 */

/**
 * 利用递归思想
 * @param {*} arr 
 * @returns arr
 * 时间复杂度O(nlogn)
 * 空间复杂度O(nlogn)
 */
var quickSort = (arr) => {
  if(arr.length < 2) return arr
  let origin = arr[0]
  let left = [], right = []
  for(let i = 1;i < arr.length;i++) {
    if(arr[i] > origin) {
      right.push(arr[i])
    } else {
      left.push(arr[i])
    }
  }
  return [...quickSort(left), origin, ...quickSort(right)]
}
quickSort([3,1,33,2222,83,9])