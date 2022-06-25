/*
 * @Author: Chendapeng
 * @Date: 2021-11-14 15:20:49
 * @LastEditors: Chendapeng
 * @LastEditTime: 2021-11-14 16:00:35
 * @Description: 选择排序和插入排序
 */
var selectSort = (arr) => {
  for(let i = 0; i < arr.length; i++) {
    let min = i;
    for(let j = i; j < arr.length;j++) {
      if(arr[min] > arr[j]) {
        min = j
      }
    }
    [arr[min], arr[i]] = [arr[i], arr[min]]
  }
  return arr
}
selectSort([33,1,22,2,4,55,9])

// 插入排序 
var insertSort = (arr) => {
  let temp, prev
  for(let i = 1; i < arr.length;i++) {
    prev = i - 1;
    temp = arr[i]
    while(prev >= 0 && temp < arr[prev]) {
      arr[prev + 1] = arr[prev]
      prev --
    }
    arr[prev + 1] = temp
  }
  return arr
}
insertSort([22,111,2,3,444,1,9])

// 归并排序
var mergeSort = (arr) => {
  const merge = (left, right) => {
    let i = 0, j = 0;
    let res = []
    while(i < left.length && j < right.length) {
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
  var sort = arr => {
    if (arr.length === 1) return arr
    let mid = Math.floor(arr.length/2)
    let left = arr.slice(0, mid)
    let right = arr.slice(mid)
    return merge(mergeSort(left), mergeSort(right))
  }
  return sort(arr)
}
mergeSort([22,3,111,3,4,9])
