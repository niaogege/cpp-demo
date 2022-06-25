/*
 * @Author: Chendapeng
 * @Date: 2021-10-16 11:07:12
 * @LastEditors: Chendapeng
 * @LastEditTime: 2021-11-17 10:23:14
 * @Description: 回溯组合问题
 */
/*
  https://leetcode-cn.com/problems/combination-sum/
  输入: candidates = [2,3,6,7], target = 7
  输出: [[7],[2,2,3]]
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 var combinationSum = function(candidates, target) {
  var res = []
  const backTrack = (start, total, path) => {
    if (total > target) {
      return false
    }
    if (total === target) {
      res.push(path.slice())
    }
    for(let i = start; i < candidates.length;i++) {
      total += candidates[i]
      path.push(candidates[i])
      backTrack(i, total, path)
      path.pop()
      total -= candidates[i]
    }
  }
  backTrack(0, 0, [])
  return res
};

/**
 * https://leetcode-cn.com/problems/combination-sum-ii/
 * @param {*} candidates 
 * @param {*} target 
 * @returns 
 */
var combinationSum2 = function(candidates, target) {
  var res = []
  candidates.sort()
  var backTrack = (path, start, total) => {
      if (total === target) {
          res.push(path)
          return false
      }
      if (total > target) {
          return false
      }
      for(let i = start;i < candidates.length; i++) {
          if (i > start && candidates[i] === candidates[i-1]) continue
          path.push(candidates[i])
          backTrack(path.slice(), i + 1, total + candidates[i])
          path.pop()
      }
  }
  backTrack([],0, 0)
  return res
};

/**
 * https://leetcode-cn.com/problems/restore-ip-addresses/
 * @param {*} s IP地址分割
 * @returns 
 */
// 尝试失败
var restoreIpAddresses = function(s) {
  var res = []
  let str = ''
  var backTrack = (path, start) => {
      // 满足符合的条件
      var TT = path.every(e => (+e >= 0 && +e <= 255) && 
          ((e.length > 1 && e[0] !== 0) || e.length === 1))
      if (TT && path.length === 4) {
        res.push(path.join('.'))
        return false
      }
      // 横行遍历和纵向遍历
      for(let i = start; i < s.length; i++) {
        if(str.length <=3) {
          str += s[i]
        }
        path.push(str)
        backTrack(path.slice(), i + 1)
        path.pop()
        str = ''
      }        
  }
  backTrack([], 0)
  return res;
};

/**
 * 失败在分割这块，不一定是一个一个这种分割，而是组合式分割，有多重
 * 参考答案 https://leetcode-cn.com/problems/restore-ip-addresses/solution/shou-hua-tu-jie-huan-yuan-dfs-hui-su-de-xi-jie-by-/
 * 
 */

/**
 * @param {string} s
 * @return {string[]}
 */
 var restoreIpAddresses2 = function(s) {
  var res = []
  var backTrack = (path, start) => {
      // 满足符合的条件
      // 耗尽所有字符
      if (start === s.length && path.length === 4) {
        res.push(path.join('.'))
        return false
      }
      if (start < s.length && path.length === 4) {
        return false
      }
      // 横行遍历和纵向遍历
      for(let len = 1; len<= 3; len++) {
        if (start + len - 1 >= s.length) return ''
        if(len !== 1 && s[start] === '0') return ''
        let str = s.substring(start, start + len)
        if(len === 3 && + str > 255) return ''
        path.push(str)
        backTrack(path.slice(), start + len)
        path.pop()
      }        
  }
  backTrack([], 0)
  return res;
};

//复原 IP 地址 93
/**
 * @param {string} s
 * @return {string[]}
 */
 var restoreIpAddresses3 = function(s) {
  var res = []
  var backTrack = (path, start) => {
    // 满足条件 开始时间等于s.length且path.length
    if (s.length === start && path.length === 4) {
      res.push(path.join('.'))
      return false
    }
    if(start < s.length && path.length === 4) return false
    for(let len = start; len<= 3; len++) {
      if(start + len - 1 > s.length) return ''
      if (len !== 1 && s[start] === '0') return ''
      var str = s.substr(start, start + len)
      if (len === 3 && + str > 255) return '' 
      path.push(str)
      backTrack(path.slice(), len + start)
      path.pop()
    }
  }
  backTrack([], 0)
  return res
};

/**
 * 电话号码组合
 * https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/
 示例 1：
 输入：digits = "23"
 输出：["ad","ae","af","bd","be","bf","cd","ce","cf"]
 输入：digits = "2"
 输出：["a","b","c"]
 */
/**
 * @param {string} digits
 * @return {string[]}
 */
 var letterCombinations = function(digits) {
  var M = new Map([
    [2, 'abc'],
    [3, 'def'],
    [4, 'ghi'],
    [5, 'jkl'],
    [6, 'mno'],
    [7, 'pqrs'],
    [8, 'tuv'],
    [9, 'wxyz'],
  ])
  var res = []

};