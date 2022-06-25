/*
 * @Author: Chendapeng
 * @Date: 2021-09-15 09:35:41
 * @LastEditors: Chendapeng
 * @LastEditTime: 2021-09-15 17:47:35
 * @Description: 验证二叉搜索树
 */

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
 var isValidBST = function(root) {
  let recurise = (root, min, max) => {
      if (root) return null;
      if (min >= root.val || root.val >= max) {
          return false
      }
      return recurise(root.left, min, root.val) && recurise(root.right, root.val, max)
  }
  return recurise(root, -Infinity, Infinity)
};