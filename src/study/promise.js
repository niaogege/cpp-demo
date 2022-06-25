/*
 * @Author: Chendapeng
 * @Date: 2021-10-17 19:39:15
 * @LastEditors: Chendapeng
 * @LastEditTime: 2021-10-17 19:40:51
 * @Description: 
 */

var p1 = new Promise((resolve) => resolve(1))
var p2 = new Promise((resolve) => resolve(22))
var p3 = new Promise((resolve) => resolve(333))
var arr = [p1,p2,p3]
arr.forEach(p => {
  p.then(e => console.log(e))
})