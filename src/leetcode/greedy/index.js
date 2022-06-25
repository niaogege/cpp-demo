/*
 * @Author: Chendapeng
 * @Date: 2021-11-28 15:53:11
 * @LastEditors: Chendapeng
 * @LastEditTime: 2021-11-28 16:02:10
 * @Description: 贪心算法
 */

// 合并区间 https://leetcode-cn.com/problems/merge-intervals/submissions/
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 * 错误答案
 */
 var merge = function(intervals) {
  intervals.sort((a,b) => a[0] - b[0])
  let res = [intervals[0]]
  for (let i = 1; i < intervals.length;i++) {
      var arr = intervals[i]
      var pre = intervals[i - 1]
      if(pre[1] >= arr[1] || pre[1] >= arr[0]) {
          let cur = res.pop()
          arr=[Math.min(cur[0], pre[0], arr[0]), Math.max(arr[1], cur[1], pre[1])]
      }
      res.push(arr)
  }
  return res
};

// 正解
var merge2 = function(intervals) {
  intervals.sort((a,b) => a[0] - b[0])
  let pre = intervals[0]
  let res = []
  for (let i = 0; i < intervals.length;i++) {
      var arr = intervals[i]
      if (arr[0] > pre[1]) {
        res.push(pre)
        pre = arr
      } else {
        pre[1] = Math.max(pre[1],arr[1])
      }
  }
  res.push(pre)
  return res
};
