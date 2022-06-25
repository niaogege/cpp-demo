/*
 * @Author: Chendapeng
 * @Date: 2021-09-06 21:32:05
 * @LastEditors: Chendapeng
 * @LastEditTime: 2021-09-06 21:49:13
 * @Description: 有效路径
 */

/**
 * @param {string} path
 * @return {string}
 */
// 始终以斜杠 '/' 开头。
// 两个目录名之间必须只有一个斜杠 '/' 。
// 最后一个目录名（如果存在）不能 以 '/' 结尾。
// 此外，路径仅包含从根目录到目标文件或目录的路径上的目录（即，不含 '.' 或 '..'）。
var simplifyPath = function(path) {
  let arr = path.split('/').filter(e => e !== '.' && e)
  let stack = []
  for (let i = 0; i<arr.length;i++) {
      if(arr[i] !== '..') {
          stack.push(arr[i])
      } else {
          stack.pop()
      }
  }
  return `/${stack.join('/')}`
}
