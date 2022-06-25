/*
 * @Author: Chendapeng
 * @Date: 2021-09-13 22:54:37
 * @LastEditors: Chendapeng
 * @LastEditTime: 2021-09-21 10:35:15
 * @Description: 层序遍历
 */

// 迭代遍历
var levelOrder = function(root) {
  if (!root) return []
  let queue = [root]
  while(queue.length) {
    let len = queue.length
    let temp = []
    for(let i = 0; i < len; i++) {
      let cur = queue.shift()
      temp.push(cur.val)
      if (cur.left) {
        queue.push(cur.left)
      }
      if (cur.right) {
        queue.push(cur.right)
      }
    }
    queue.push(temp)
  }
  return queue
};
// 递归遍历
var levelOder2 = (root) => {
  if (!root) return []
  let res = []
  const dfs = (node, step, res) => {
    if (node) {
      if (!res[step]) {
        res[step] = []
      }
      res[step].push(node.val)
      dfs(node.left, step+1, res)
      dfs(node.right, step+1, res)
    }
  }
  dfs(root, 0, res)
  return res
}


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
 * @return {number[][]}
 */
 var levelOrderBottom = function(root) {
  if (root == null) return []
  let res = []
  const dfs = (node, depth) => {
      if (node) {
          if (!res[depth]) {
              res[depth] = []
          }
          res[depth] = node.val
          dfs(node.left, depth ++)
          dfs(node.right, depth++)
      }
  }
  dfs(root, 0)
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
levelOrderBottom(tree1)
