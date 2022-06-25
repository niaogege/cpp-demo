/*
 * @Author: Chendapeng
 * @Date: 2021-12-07 14:07:10
 * @LastEditors: Chendapeng
 * @LastEditTime: 2021-12-07 14:53:16
 * @Description: 手撕代码
 */

const removeDuple = (arr) => {
  return arr.filter((e, index, arr) => arr.indexOf(e) === index)
}
removeDuple([1,2,3,4,1])

// 驼峰转换
const transform = (str) => {
  return str.replace(/[-|@|_]([\w])/g, (m, p) => p.toUpperCase())
}
transform('content-type')
