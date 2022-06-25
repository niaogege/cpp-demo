/*
 * @Author: Chendapeng
 * @Date: 2021-10-13 22:18:09
 * @LastEditors: Chendapeng
 * @LastEditTime: 2021-10-14 22:58:58
 * @Description: 树的属性
 */
var tree1 = {
  val: 5,
  left: {
    val: 4,
    left: null,
    right: {
      val: 2,
      left: null,
      right: null
    }
  },
  right: {
    val: 8,
    left: null,
    right: {
      val: 6,
      left: null,
      right: null
    }
  }
}
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var widthOfBinaryTree = function(root) {
  if(root == null) return 0
  let queue = [[0n, root]]
  let ans = 1n;
  while(queue.length) {
    let width = queue[queue.length-1][0] - queue[0][0] + 1n
    if(width > ans) {
      ans = width
    }
    let temp = []
    for(const[i, q] of queue) {
      q.left && temp.push([i * 2n, q.left])
      q.right && temp.push([i * 2n + 1n, q.right])
    }
    queue = temp
  }
  return Number(ans)
};

var tree2 = {
  val: 1,
  left: {
    val: 3,
    left: {
      val: 5,
      left: null,
      right: null
    },
    right: {
      val: 3,
      left: null,
      right: null
    }
  },
  right: null
}
widthOfBinaryTree(tree2)