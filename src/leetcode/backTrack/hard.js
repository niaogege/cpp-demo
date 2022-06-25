/*
 * @Author: Chendapeng
 * @Date: 2021-11-06 18:19:31
 * @LastEditors: Chendapeng
 * @LastEditTime: 2021-11-07 20:19:13
 * @Description: 回溯 分割IP地址
 */

// https://leetcode-cn.com/problems/restore-ip-addresses/
/**
 * @param {string} s
 * @return {string[]}
 */
 var restoreIpAddresses = function(s) {
  var res = []
  var backTrack = (path, start) => {
      if(path.length > 4) return;
      if(path.length === 4 && start === s.length) {
          res.push(path.join('.'))
          return false
      }
      for(let i = start; i < s.length; i ++) {
        let str = s.substr(start, i - start + 1 )
        if (str.length > 3 || + str > 255) break;
        if (str.length > 1 && str[0] === '0') break;
        path.push(str)
        backTrack(path.slice(), i + 1)
        path.pop() 
      }
  }
  backTrack([], 0)
  return res
};
var arr = restoreIpAddresses('25525511135')
console.log(arr);


// 括号生成
/**
 * @param {number} n
 * @return {string[]}
 */
 var generateParenthesis = function(n) {
  var res = []
  var helper = (lRemain, rRemain, str) => {
      if (str.length === n * 2 ) {
          res.push(str)
          return false
      }
      if (lRemain > 0) {
          helper(lRemain - 1, rRemain, `${str}(`)
      }
      if (rRemain > lRemain) {
          helper(lRemain, rRemain - 1, `${str})`)
      }
  }
  helper(n, n, '')
  return res
};

/**
 * @param {number} n
 * @return {string[]}
 */
 var generateParenthesis2 = function(n) {
  var res = []
  var helper = (lRemain, rRemain, str) => {
      if (lRemain === n && rRemain === n ) {
          res.push(str)
          return false
      }
      if (lRemain < n) {
          helper(lRemain + 1, rRemain, `${str}(`)
      }
      if (rRemain < lRemain) {
          helper(lRemain, rRemain + 1, `${str})`)
      }
  }
  helper(0, 0, '')
  console.log(res)
  return res
};