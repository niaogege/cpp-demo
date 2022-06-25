/*
 * @Author: Chendapeng
 * @Date: 2021-11-12 09:10:46
 * @LastEditors: Chendapeng
 * @LastEditTime: 2021-11-12 10:52:08
 * @Description: 排序各种尝试
 */
var bubbleSort = (arr) => {
  for(let i = 0; i < arr.length;i ++) {
    for(let j = 0; j < arr.length - i;j++) {
      if(arr[j] < arr[j-1]) {
        [arr[j-1], arr[j]] = [arr[j], arr[j-1]]
      }
    }
  }
  return arr
}
bubbleSort([3,5,1,2,33,111,8])


/**
 * insertSort插入排序
 * 从后往前插入 temp
 */
var InsertSort = (arr) => {
  let j, temp
  for (let i = 1;i < arr.length;i++) {
    j = i - 1;
    temp = arr[i];
    while(j >= 0 && temp < arr[j]) {
      arr[j + 1] = arr[j]
      j--
    }
    arr[j + 1] = temp
  }
  return arr;
}
InsertSort([3,1,22,11,9,10, 2])
 /**
  * 选择排序 selectSort 选择排序
  * 选择最小的俩俩交换
  */
 var selectSort = (arr) => {
  for(let i = 0; i < arr.length;i++) {
    let min = i
    for(let j = i + 1; j < arr.length; j++) {
      if(arr[j] < arr[min]) {
        min = j
      }
    }
    [arr[min], arr[i]] = [arr[i], arr[min]]
  }
  return arr
 }
 selectSort([11,2,1,33,22,111,9])