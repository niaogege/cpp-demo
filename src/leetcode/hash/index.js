/*
 * @Author: Chendapeng
 * @Date: 2021-11-27 13:07:19
 * @LastEditors: Chendapeng
 * @LastEditTime: 2021-11-27 13:17:30
 * @Description: hash碰撞
 */
// [1,2,5,5,5]
// 3
var count = (arr) => {
  var m = new Map()
  let max = 1
  let res = []
  for(let i = 0;i < arr.length;i++) {
    let cur = arr[i]
    if(m.has(cur)) {
      let curCount = m.get(cur)
      m.set(cur, curCount + 1)
      max = Math.max(max, curCount + 1)
    } else {
      m.set(cur, 1)
    }
  }
  for(let [key, val] of m) {
    if(val === max) {
      res.push(key)
    }
  }
  return [res, max]
}
