/*
 * @Author: Chendapeng
 * @Date: 2022-01-11 15:46:10
 * @LastEditors: Chendapeng
 * @LastEditTime: 2022-01-11 17:32:48
 * @Description: 最长公共前缀
 */
// https://leetcode-cn.com/problems/longest-common-prefix/submissions/

/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
  var diffStr = strs[0]
  var flag
  for(let i = 0; i <= diffStr.length; i++) {
      if (strs[i] === '') {
        return ''
      } else {
        flag = strs.every((str) => str.substring(0, i + 1) === diffStr.substring(0, i+1))
      }
      if (!flag) {
        return diffStr.substring(0, i)
      }

  }
  if (flag) {
    return diffStr
  }
};

/**
 * 思路 字符串截取
 * str.substring 当substring有两个参数时，第一个参数表示从字符串的第几位开始截取，第二个参数表示截取到字符串的第几位
 * str.substr 当substr有两个参数时 第一个参数表示从字符串的第几位开始截取，第二个参数表示截取多少个字符串
 * 当只有一个参数的时候 两者作用是一样的 表示从第几位开始截取
 */
