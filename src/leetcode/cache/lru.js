/*
 * @Author: Chendapeng
 * @Date: 2021-12-15 21:56:10
 * @LastEditors: Chendapeng
 * @LastEditTime: 2021-12-15 21:58:46
 * @Description: 
 */

/**
 * @param {number} capacity
 */
 var LRUCache = function(capacity) {
  this.size = capacity
  this.container = new Map()
};

/** 
* @param {number} key
* @return {number}
*/
LRUCache.prototype.get = function(key) {
  if (this.container.has(key)) {
      const val = this.container.get(key)
      this.container.delete(key) // 
      this.container.set(key, val)
      return val
  }
  return -1
};

/** 
* @param {number} key 
* @param {number} value
* @return {void}
*/
LRUCache.prototype.put = function(key, value) {
  var size = this.container.size
  if (!this.container.has(key)) {
      // 当前数据大于等于容量则需要找到最后一个值的key 然后删除
      if (size >= this.size) {
          // var lastVal = this.container.next.value()
          // var lastkey = null
          // for(let [k,val] of this.container.entries()) {
          //     if (val === lastVal) {
          //         lastkey = k
          //     }
          // }
          var lastKey = this.container.keys().next().value
          this.container.delete(lastKey)
      }
  } else {
    this.container.delete(key)
  }
  this.container.set(key, value)
};

/**
* Your LRUCache object will be instantiated and called as such:
* var obj = new LRUCache(capacity)
* var param_1 = obj.get(key)
* obj.put(key,value)
*/