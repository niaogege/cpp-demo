/*
 * @Author: Chendapeng
 * @Date: 2021-09-28 18:54:48
 * @LastEditors: Chendapeng
 * @LastEditTime: 2021-09-29 09:52:05
 * @Description: 路径之和
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var sumNumbers = function(root) {
  if (root == null) return 0
  var res = []
  const dfs = (root) => {
      if(root.left == null && root.right == null) {
        res.push(root.val)
      }
      if (root.left) {
        root.left.val = root.left.val + root.val
        dfs(root.left, root.left.val)
      }
      if (root.right) {
        root.right.val = root.val + root.right.val
        dfs(root.right, root.right.val)
      }
  }
  dfs(root)
  return res.reduce((pre,cur) => pre + cur, 0)
};

// 大神写的
var sumNumbers3 = function(root) {
  if (root == null) return 0
  const dfs = (root, prevSum) => {
      const sum = prevSum * 10 + root.val;
      if (root.left == null && root.right == null) {
          return sum;
      } else {
          return dfs(root.left, sum) + dfs(root.right, sum);
      }
  }
  return dfs(root, 0)
};



var sumNumbers2 = (root) => {
  if (root == null) return []
  var arr = []
  const dfs = (root, sum) => {
    // 叶子节点
    if (root.left == null && root.right ==null) {
      arr.push(root.val+sum)
    }
    if (root.left) {
      dfs(root.left, root.left.val + sum)
    }
    if (root.right) {
      dfs(root.right, root.right.val + sum)
    }
  }
  dfs(root, root.val)
  return arr
}
var tree1 = {
  val: 5,
  left: {
    val: 4,
    left: {
      val: 1,
      left: null,
      right: null
    },
    right: {
      val: 2,
      left: null,
      right: null
    }
  },
  right: {
    val: 8,
    left: {
      val: 3,
      left: null,
      right: null
    },
    right: {
      val: 6,
      left: null,
      right: null
    }
  }
}
sumNumbers2(tree1)


/**
 * @param {TreeNode} root
 * @return {number}
 */
 var diameterOfBinaryTree = function(root) {
  if(root == null) return 0
  var res = []
  const dfs = (root) => {
    if(!root.left && root.right == null) {
      res.push(root.val)
    }
    if(root.left) dfs(root.left)
    if(root.right) dfs(root.right)
  }
  dfs(root)
  return res.length
};
