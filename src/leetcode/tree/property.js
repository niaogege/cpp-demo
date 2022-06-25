/*
 * @Author: Chendapeng
 * @Date: 2021-09-29 09:35:57
 * @LastEditors: Chendapeng
 * @LastEditTime: 2021-09-29 09:44:35
 * @Description: 二叉树属性
 */
/**
 * 自顶向下
 * @param {*} root 
 * @returns 
 */
var isBalanced = function(root) {
  if (root == null) {
      return true
  }
  return isBalanced(root.left) && 
    isBalanced(root.right) && 
    Math.abs(maxDepth(root.left) - maxDepth(root.right)) <= 1
};
const maxDepth = (root) => {
  if (root == null) {
      return 0
  } else {
      return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
  }
}


/**
 * 自下向上
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced2 = function(root) {
  return counNode(root) !== -1  
};
var counNode = (root) => {
  if(root == null) return 0
  let left = counNode(root.left)
  let right = counNode(root.right)
  if (left === -1 || right === -1 || Math.abs(left - right) > 1) {
    return -1
  }
  return 1 + Math.max(left, right)
}
