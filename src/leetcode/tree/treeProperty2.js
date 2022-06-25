/*
 * @Author: Chendapeng
 * @Date: 2021-09-29 19:03:05
 * @LastEditors: Chendapeng
 * @LastEditTime: 2021-09-29 19:15:56
 * @Description: 对称二叉树
 */

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  const dfs =(l,r) => {
    const queue = [l,r]
    while(queue.length) {
      let p = queue.shift()
      let q = queue.shift()
      if(p == null && q == null) continue
      if((!p || !q) || q.val !== p.val) return false
      queue.push(p.left, q.right)
      queue.push(p.right, q.left) 
    }
    return true
  }
  return dfs(root, root)
}

/**
 * 翻转二叉树
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
 var invertTree = function(root) {

};