/*
 * @Author: Chendapeng
 * @Date: 2021-10-12 09:11:12
 * @LastEditors: Chendapeng
 * @LastEditTime: 2021-10-14 21:57:59
 * @Description: 中等级别二叉树
 */

/**
 * 完全二叉树校验
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
 var isCompleteTree = function(root) {
  if(root == null) return true
  let queue = [root]
  while(queue.length) {
    let cur = queue.shift()
    // 如果当前节点是null且栈内还有元素
    if(cur == null && queue[0]) {
      return false
    }
    if(cur) {
      queue.push(cur.left)
      queue.push(cur.right)
    }
  }
  return true
};

// 113 路径总和 回溯
// 给你二叉树的根节点 root 和一个整数目标和 targetSum ，找出所有 从根节点到叶子节点 路径总和等于给定目标和的路径。
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
 var pathSum = function(root, targetSum) {
  if(root == null) return []
  var res = []
  var dfs = (root, path, sum) => {
    sum = sum + root.val
    path.push(root.val)
    if (
      root.left == null &&
      root.right == null &&
      sum === targetSum
    ) {
      res.push(path)
    }
    root.left && dfs(root.left, path, sum)
    root.right && dfs(root.right, path, sum)
    path.pop()
  }
  dfs(root, [], 0)
  return dfs
};

// 662
/**
 * 给定一个二叉树，编写一个函数来获取这个树的最大宽度。树的宽度是所有层中的最大宽度。这个二叉树与满二叉树（full binary tree）结构相同，但一些节点为空
 * 每一层的宽度被定义为两个端点（该层最左和最右的非空节点，两端点间的null节点也计入长度）之间的长度。
 */

var InsertSort = (arr) => {
  var len = arr.length
  var cur,prev
  for(let i = 1; i<len; i++) {
    cur = arr[i]
    prev = i - 1
    while(
      prev >= 0 &&
      arr[prev] > cur
    ) {
      arr[prev + 1] = arr[prev]
      prev --
    }
    arr[prev+1] = cur
  }
  return arr
}
InsertSort([33,1,333,22,9,8])