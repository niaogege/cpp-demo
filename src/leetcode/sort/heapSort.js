/*
 * @Author: Chendapeng
 * @Date: 2021-10-09 16:00:38
 * @LastEditors: Chendapeng
 * @LastEditTime: 2021-10-13 20:54:28
 * @Description: 堆排序
 * 堆排序（Heapsort）是指利用堆这种数据结构所设计的一种排序算法。堆积是一个近似完全二叉树的结构，并同时满足堆积的性质：即子结点的键值或索引总是小于（或者大于）它的父节点。
 */
 var heapSort = (arr) => {

 }
 heapSort([3,1,222,1,9,8])

var selectSort = (arr) => {
  let len = arr.length
  for(let i = 0 ; i< len-1; i++) {
    let mix = i
    for(let j = i + 1; j < len; j++) {
      if(arr[mix] > arr[j]) {
        mix = j
      }
    }
    [arr[mix], arr[i]] = [arr[i], arr[mix]]
  }
  return arr
}
selectSort([3,2,11,9, 10, 6, 1])

var InsertSort = (arr) => {
  let len = arr.length
  let prev, cur
  for(let i = 1; i < len; i++) {
    cur = arr[i]
    prev = i - 1;
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
InsertSort([22,1,333,2,8,9])


