/*
 * @Author: Chendapeng
 * @Date: 2021-07-30 09:53:34
 * @LastEditors: Chendapeng
 * @LastEditTime: 2021-08-16 09:50:50
 * @Description: 
 */

/**
 * 二分查找
 * 输入: nums = [-1,0,3,5,9,12], target = 9
 * 输出: 4
 * 解释: 9 出现在 nums 中并且下标为 4
 */
 var search = function(nums, target) {
  let left = 0
  let right = nums.length - 1  
  while(right >= left) {
    if(nums[right] === target) {
      return right
    } else if (nums[right] > target) {
      right--
    } else if (nums[left] < target){
      left++
    } 
  }
  return -1
};
var arr = [-1,0,3,5,9,12]
var target = 9
search(arr, target)

/**
 * 链表相关问题
 */

 var lengthOfLongestSubstring = function(s) {
  if (s && !s.length) return 0
  let arr = []
  let max = 0
  for(let i=0; i < s.length; i++) {
    const num = arr.indexOf(s[i])
    if(num > -1) {
      arr.splice(0, num + 1)
    }
    arr.push(s[i])
    max = Math.max(max, arr.length)
  }
  return max	
};
var lengthOfLongestSubstring = function(s) {
  if(!s.length) return 0
  let res = []
  let max = 0
  for (let i = 0; i < s.length; i++) {
    let cur = s[i]
    let index = res.indexOf(cur)
    if (index > -1) {
      res.splice(0, index + 1)
    }
    res.push(cur)
    max = Math.max(max, res.length)
  }
  return max
};
lengthOfLongestSubstring('dvdf')

// 矩形阵中找第K个最小的
var kthSmallest = function(matrix, k) {
  let res = matrix && matrix.flat()
  let arr = res.sort((a, b) => a- b)
  return arr[k > 1 ? k - 1 : 0]
};

//14. 最长公共前缀
/**
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 如果不存在公共前缀，返回空字符串 ""。
 * 输入：strs = ["flower","flow","flight"]
 * 输出："fl"
 */

 var longestCommonPrefix = function(strs) {
  if(strs.length == 1) {
      return strs[0]
  }
  let first = strs.splice(0, 1)[0].split('')
  let res = []
  strs.every((cur, Index, arr) => {
    for(let [num, str] of first.entries()) {
      let index = cur.indexOf(str)
      if (index > -1 && res.length  === num) {
        res.push(str)
      } 
    }
  })  
  return res.length === 0 ? '' : res.join('')
}
// var arr = ["ab", "a"]
var arr = ["flower","flow","flight"]
longestCommonPrefix(arr)
arr.reduce((pre, cur, index, arr) => {

}, [])

// 答案
var longestCommonPrefix = function(strs) {
  let str = strs[0]
  let flag
  for (let i = 0; i < str.length; i ++) {
    // 如果一个有空元素即返回空元素
    if(strs.some(e => e === '')) {
      return ''
    } else {
      flag = strs.every((val) => val.substring(0, i) === first.substring(0, i))
    }
    if(!flag) {
      return str.substring(0, i - 1)
    }
  }
  if (flag) return str
}

// 爬楼梯
/**
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
 * 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
 * 注意：给定 n 是一个正整数。
 * dp[i] = dp[i - 2] + dp[i - 1]
 */
var climbstaris = (n) => {
  const dp = {}
  dp[1] = 1
  dp[2] = 2
  for (let i = 3; i <=n; i++) {
    dp[i] = dp[i - 2] + dp[i - 1]
  }
  return dp[n]
}


/**
 *  斐波那契数列
 *  0 1 1 2 3 5 8
 *  终止条件非常重要
 */
var fibnic = (n) => {
  if (n < 1) return 0
  if (n == 1 || n == 2) return 1
  return fibnic(n - 1) + fibnic(n - 2)
}

