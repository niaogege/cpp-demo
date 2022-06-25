/*
 * @Author: Chendapeng
 * @Date: 2021-08-15 16:33:37
 * @LastEditors: Chendapeng
 * @LastEditTime: 2021-08-15 20:28:24
 * @Description:  二叉树的前中后序遍历
 */

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var preorderTraversal = function(root) {
  let res = []
  const preorder = (node) => {
    if (node != null && node.val)  {
      res.push(node.val)
      preorder(node.left)
      preorder(node.right)
    }
  }
  preorder(root)
  return res
};

/**
 * 迭代式前序遍历
 */
 var preorderTraversal = function(root) {
  let res = []
  const stack = []
  while(root || stack.length) {
    while(root) {
      res.push(root.val)
      stack.push(root)
      root = root.left
    }
    root = stack.pop()
    root = root.right
  }
  return res
};

var test = {
  val: 1,
  left: {
    val: 3,
    left: {
      val: 4
    },
    right: {
      val: 5
    }
  },
  right: {
    val: 6,
    left: {
      val: 7
    },
    right: {
      val: 8
    }
  }
}