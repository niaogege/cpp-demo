/*
 * @Author: Chendapeng
 * @Date: 2021-09-26 19:26:03
 * @LastEditors: Chendapeng
 * @LastEditTime: 2021-09-28 15:12:43
 * @Description: 二叉树路径
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
 * @param {number} targetSum
 * @return {boolean}
 */
 var hasPathSum = function(root) {
  var targets = []
  let res = []
  const traverse = (node) => {
      let temp = []
      if (node) {
          traverse(node.left)
          traverse(node.right)
          temp.push(node.val)
          res.push(temp)
      }
  }
  traverse(root)
  console.log(res)
  return res
};

var hasPathSum2 = function(root, targetSum) {
  if (root == null) return false
  if (root.left == null && root.right ==null) {
      return targetSum - root.val === 0
  }
  return (hasPathSum(root.left, targetSum - root.val) || 
    hasPathSum(root.right, targetSum - root.val))
};



var tree = {
  val: 5,
  left: {
    val: 4,
    left: {
      val: 11,
      left: {
        val: 7,
        left: null,
        right: null
      },
      right: {
        val: 2,
        left: null,
        right: null
      }
    },
    right: null
  },
  right: {
    val: 8,
    left: {
      val: 13,
      left: null,
      right: null
    },
    right: {
      val: 4,
      left: null,
      right: {
        val: 1,
        left: null,
        right: null
      }
    }
  }
}

var traverse = (root) => {
  let arr = []
  var dfs = (node) => {
    if (node) {
      dfs(node.left)
      dfs(node.right)
      return node.val
    }
  }
  arr.push(dfs(root))
  return arr
}


var hasPathSum3 = function(root, targetSum) {
  var arr = []
  const dfs = (root, targetSum) => {
    if (root == null) return false
    // 叶子节点
    if (root.left == null && root.right ==null) {
      arr.push(root.val)
    }
    if (root.left) {
      root.left.val = root.val + root.left.val
    }
    if (root.right) {
      root.right.val = root.val + root.right.val
    }
    return (dfs(root.left) || dfs(root.right))
  }
  dfs(root)
  return arr.includes(targetSum)
};
hasPathSum3(tree1)


var pathSum = function(root, targetSum) {
  var arr = []
  const dfs = (root) => {
      if (root == null) return false
      // 叶子节点
      if (root.left == null && root.right ==null) {
          arr.push(root.val)
      }
      if (root.left) {
          root.left.val = `${root.val},${root.left.val}`
      }
      if (root.right) {
          root.right.val = `${root.val},${root.right.val}`
      }
      return (dfs(root.left) || dfs(root.right))
  }
  dfs(root)
  let res = []
  console.log(arr, 'arr')
  arr.forEach(e => {
      let temp = e.split(',').map(e => parseInt(e, 10))
      let total = temp.reduce((pre, cur) => cur + pre, 0)
      if (total === targetSum) {
          res.push(temp)
      }
  })
  return res
};
var pathSumDfs = (root, targetSum) => {
  var arr = []
  const dfs = (root, path, sum) => {
      if (root == null) return false
      // 叶子节点
      if (root.left == null && root.right ==null && sum === targetSum) {
        arr.push(path)
      }
      if (root.left) {
        dfs(root.left, [...path, root.left.val], root.left.val + sum)
      }
      if (root.right) {
        dfs(root.right, [...path, root.right.val], root.right.val + sum)
      }
  }
  dfs(root, [], 0)
  return arr
}


pathSum(tree1)

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
// 回溯
var pathSum2 = (root, targetSum) => {
  const res= []
  const dfs = (root, path, treesum) => {
    if (root == null) return null
    path.push(root.val)
    treesum += root.val 
    if (root.left == null && root.right == null) {
      if (treesum === targetSum) {
        res.push(path.slice())
      }
    } 
    dfs(root.left, path, treesum)
    dfs(root.right, path, treesum)
    path.pop()
  }
  dfs(root, [], 0)
  return res
}
pathSum2(tree1)

var pathSumDfs2 = (root, targetSum) => {
  if (root == null) return []
  var arr = []
  const dfs = (root, path, sum) => {
    // 叶子节点
    if (root.left == null && root.right ==null && sum === targetSum) {
      arr.push(path)
    }
    if (root.left) {
      dfs(root.left, [...path, root.left.val], root.left.val + sum)
    }
    if (root.right) {
      dfs(root.right, [...path, root.right.val], root.right.val + sum)
    }
  }
  dfs(root, [root.val], root.val)
  return arr
}


var binaryTreePaths = function(root) {
  if (root == null) return []
  let res = []
  if (root.left == null && root.right == null) {
    return [`${root.val}`]
  }
  let leftPaths = binaryTreePaths(root.left)
  let rightPaths = binaryTreePaths(root.right)
  console.log(leftPaths, 'leftpaths')
  leftPaths.forEach((leftPath) => {
    res.push(`${root.val}->${leftPath}`)
  })
  rightPaths.forEach((rightPath) => {
    res.push(`${root.val}->${rightPath}`)
  })
  return res
};