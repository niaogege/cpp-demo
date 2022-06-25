/*
 * @Author: Chendapeng
 * @Date: 2021-09-11 23:04:50
 * @LastEditors: Chendapeng
 * @LastEditTime: 2021-09-21 15:25:23
 * @Description: 二叉树前中后序
 */
// https://leetcode-cn.com/problems/validate-binary-search-tree/submissions/
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
 var isValidBST = function(root) {
  let flag = false
  const traverse = (head) => {
    if (head) {
      let left = head.left
      if (left && left.val >= head.val) {
        return false
      }
      let right = head.right
      if (right && right.val <= head.val) {
        return false
      }
      left = traverse(head.left)
      right = traverse(head.right)
      return true
    }
  }
  return traverse(root)
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

var tree = {
  val: 18,
  left: {
    val: 16,
    left: {
      val: 5,
      left: null,
      right: null,
    },
    right: {
      val: 17,
      left: null,
      right: null
    }
  },
  right: {
    val: 30,
    left: {
      val: 19,
      left: null,
      right: null
    },
    right: {
      val: 31,
      left: null,
      right: null
    }
  }
}
 var isValidBST1 = function(root) {
  const traverse = (head, lower, upper) => {
    if (head === null) {
        return true
    }
    if (lower >= head.val || head.val >= upper) {
        return false
    }
    console.log(head, 'head');
    return traverse(head.left, lower, head.val) && traverse(head.right, head.val, upper)
  }
  return traverse(root, -Infinity, Infinity)
};
isValidBST1(tree)

// 中序遍历 左 根右
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var inorderTraversal = function(root) {
  let res = []
  let stack = []
  while(root || stack.length) {
      while(root) {
          stack.push(root)
          root = root.left
      }
      root = stack.pop()
      console.log(root, 'root')
      res.push(root.val)
      root = root.right
  }
  return res
};
var tree1 = {
  val: 18,
  left: {
    val: 16,
    left: {
      val: 5,
      left: null,
      right: null,
    },
    right: {
      val: 17,
      left: null,
      right: null
    }
  },
  right: {
    val: 30,
    left: {
      val: 19,
      left: null,
      right: null
    },
    right: {
      val: 31,
      left: null,
      right: null
    }
  }
}
inorderTraversal(tree1)



// 迭代遍历

// ### 后序遍历

var tree3 = {
  val: 3,
  left: {
    val: 9,
    left: null,
    right: null
  },
  right: {
    val: 20,
    left: {
      val: 15,
      left: null,
      right: null
    },
    right: {
      val: 7,
      left: null,
      right: null
    }
  }
}
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    let res = []
    let stack = []
    while(root || stack.length) {
        while(root) {
            stack.push(root)
            res.unshift(root.val)
            root = root.right
        }
        root = stack.pop()
        root = root.left
    }
    return res
};

// ### 前序遍历
var preorderTraversal = function(root) {
    let res = []
    let stack = []
    while(root || stack.length) {
        while(root) {
            stack.push(root)
            res.push(root.val)
            root = root.left
        }
        root = stack.pop()
        root = root.right
    }
    return res
};

// ### 中序遍历
var orderTraversal = function(root) {
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
    return res
};