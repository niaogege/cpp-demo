/*
 * @Author: Chendapeng
 * @Date: 2021-10-09 15:45:30
 * @LastEditors: Chendapeng
 * @LastEditTime: 2021-10-11 11:33:14
 * @Description: 希尔排序
 * 第一个突破O(n^2)的排序算法；是简单插入排序的改进版
 */

// selectSort 选择排序 选择最小的 俩俩交换
var selectSort = (arr) => {
  let len = arr.length
  for(let i = 0; i < len - 1; i ++) {
    let mix = i // 选择最小的
    for(let j = i + 1; j < len;j++) {
      if(arr[mix] >= arr[j]) {
        mix = j
      }
    }
    [arr[i],arr[mix]] = [arr[mix], arr[i]]
  }
  return arr
}
selectSort([33,111,2,3,1,222])

// 插入 从后往前扫
var insertSort = (arr) => {
  let len = arr.length
  for(let i = 1; i < len; i++) {
    let temp = arr[i]
    let j = i - 1
    while(
      j >= 0 &&
      arr[j] > temp
    ) {
      arr[j+1] = arr[j]
      j--
    }
    arr[j+1] = temp
  }
  return arr
}
insertSort([33,111,2,3,1,222])

var mergeSort = (arr) => {
  var merge = (left, right) => {
    let res = []
    let i = 0, j = 0
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
    while (i < left.length) {
      res.push(left[i++])
    }
    while (j < right.length) {
      res.push(right[j++])
    }
    return res
  }
  var sort = (arr) => {
    if (arr.length < 2) return arr
    let mid = Math.floor(arr.length/2)
    var left = arr.slice(0, mid)
    var right = arr.slice(mid)
    return merge(mergeSort(left), mergeSort(right))
  }
  return sort(arr)
}
mergeSort([33,111,2,3,1,222])

var quickSort = (arr) => {
  if(arr.length <= 1) return arr
  let mid = Math.floor(arr.length/2)
  let midVal = arr.splice(mid, 1)[0]
  let left = [],right = []
  for(let i = 0; i< arr.length; i ++) {
    if (midVal > arr[i]) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return [...quickSort(left), midVal, ...quickSort(right)]
}
quickSort([33,111,2,3,1,222])

var bubbleSort = (arr) => {
  for(let i = 0; i < arr.length;i++) {
    for(let j = 0; j <arr.length - i -1; j++) {
      if(arr[j+1] < arr[j]) {
        [arr[j+1], arr[j]] = [arr[j], arr[j+1]]
      }
    }
  }
  return arr
}
bubbleSort([33,111,2,3,1,222])