/*
 * @Author: Chendapeng
 * @Date: 2021-09-25 16:46:01
 * @LastEditors: Chendapeng
 * @LastEditTime: 2021-09-30 12:39:38
 * @Description: 二叉树属性
 */
// 101 对称二叉树
var isSymmetric = function(root) {
  if (root == null) return true
  let queue = [root]
  let res = []
  while(queue.length) {
      let len = queue.length
      let temp = []
      for(let i = 0;i < len; i++) {
          let cur = queue.shift()
          if (cur) {
            temp.push(cur.val)
            queue.push(cur.left ? cur.left: null)
            queue.push(cur.right ? cur.right : null) 
          } else {
            temp.push(null)
          }
      }
      
  }
  return true
};

var tree = {
  val: 1,
  left: {
    val: 2,
    left: null,
    right: {
      val: 3,
      left: null,
      right: null
    }
  },
  right: {
    val: 2,
    left: null, 
    right: {
      val: 3,
      left: null,
      right: null
    }
  }
}
isSymmetric(tree)

// 对称二叉树
// dfs
var isSymmetricDfs = (root) => {
  const isCheck = (l, r) => {
    if (!l && !r) return true
    if (!l || !r) return false
    return (l.val === r.val && 
    isCheck(l.left, r.right) && 
    isCheck(l.right, r.left))
  }
  return isCheck(root, root)
}
// bfs
var isSymmetricBfs = (root) => {
  const isMirror = (l, r) => {
    const queue = [l,r]
    while(queue.length) {
      const u = queue.shift()
      const v = queue.shift()
      if (!v && !u) continue
      if ((!v || !u) || v.val != u.val) return false
      queue.push(u.left, v.right)
      queue.push(u.right, v.left)
    }
    return true
  }
  return isMirror(root, root)
}

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
 var invertTree = function(root) {
  const dfs = (l,r) => {
    if ()    
  }
  return dfs(root, root)
};
// 终止条件
// 循环条件
// 返回的是啥