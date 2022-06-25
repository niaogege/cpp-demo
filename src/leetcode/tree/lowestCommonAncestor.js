/*
 * @Author: Chendapeng
 * @Date: 2021-09-16 21:46:12
 * @LastEditors: Chendapeng
 * @LastEditTime: 2021-09-18 10:11:24
 * @Description: 二叉树的最近公共祖先
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
 var lowestCommonAncestor = function(root, p, q) {
   if (root == null || p == root || q == root) return root
   let left = lowestCommonAncestor(root.left, p, q)
   let right = lowestCommonAncestor(root.right, p, q)
   if(left && right) return root
   return left ? left : right
 }

 /**
  * 二叉搜索树的最近公共祖先
  * 迭代遍历
  */

  var lowestCommonAncestor1 = function(root, p, q) {
    while(root) {
      if (root.val > p.val && root.val > q.val) {
        root = root.left
      }
      if (root.val < p.val && root.val < q.val) {
        root = root.right
      }
      return root
    }
  }

  /**
   * 递归遍历 二叉搜索树的最近公共祖先
   */
   var lowestCommonAncestor2 = function(root, p, q) {
     while(root) {
      if (root.val > p.val && root.val > q.val) {
        return lowestCommonAncestor2(root.left,p, q)
      }
      if (root.val < p.val && root.val < q.val) {
        return lowestCommonAncestor2(root.right,p, q)
      }
      return root
    }
  }

  