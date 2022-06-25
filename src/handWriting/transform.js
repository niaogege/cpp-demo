/*
 * @Author: Chendapeng
 * @Date: 2021-12-02 23:01:29
 * @LastEditors: Chendapeng
 * @LastEditTime: 2021-12-03 09:55:15
 * @Description: 数据格式转换的问题
 */

// 下划线转驼峰格式
// content-type ->  contentType
export var transform = (str) => {
  return str.replace(/_/, (name) => {
    console.log(name)
    return name
  })
}
transform('content-type')

export var transform2 = (str) => {
  return str.replace(/[_|@|-]([\w])/g, (match, p) => p.toUpperCase())
}
transform('content-type') // contentType
transform('content@type') // contentType

// contentType -> content-type 
export var transform3 = (str) => {
  return str.replace(/[_|@|-](\w)/g, (match, p) => p.tolowerCase())
}