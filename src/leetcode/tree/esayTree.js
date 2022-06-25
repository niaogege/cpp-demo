/*
 * @Author: Chendapeng
 * @Date: 2021-10-09 09:37:10
 * @LastEditors: Chendapeng
 * @LastEditTime: 2021-10-09 13:59:21
 * @Description: tree简单
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
 var kthLargest = function(root, k) {
  if(k<1) return undefined
  let res = []
  let stack = []
  while(root || stack.length) {
    while(root) {
      stack.push(root)
      root = root.left
    }
    root = stack.pop()
    res.push(root.val)
    root = root.right
  }
  console.log(res)
  return res[k-1]
};
var kthLargest2 = function(root, k) {
  let stack = []
  let count = 0
  while(root || stack.length) {
    while(root) {
      stack.push(root)
      root = root.right
    }
    root = stack.pop()
    count++
    if(count === k) return root.val
    root = root.left
  }
  return 0
};

// BST中的众数打印
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function(root) {
  let res = []
  let M = new Map()
  let max = 0
  const dfs = (root) => {
    if(root) {
      dfs(root.left)
      if(M.has(root.val)) {
        const index = M.get(root.val)
        M.set(root.val, index+1)
        max = Math.max(index+1, max)
      } else {
        M.set(root.val, 1)
      }
      dfs(root.right)
    }
  }
  dfs(root)
  for(let [key,val] of M) {
    if(val === max) {
      res.push(key)
    }
  }
  return res
};