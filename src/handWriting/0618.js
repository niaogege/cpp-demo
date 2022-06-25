/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * BFS
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  var res = [];
  var queue = [root];
  while (queue.length) {
    let len = queue.length;
    let arr = [];
    for (let i = 0; i < len; i++) {
      var node = queue.shift();
      arr.push(node.val);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    res.push(arr);
  }
  return res;
};

/**
 * DFS
 * @param {*} root
 * @returns
 */
var levelOrder1 = function (root) {
  if (!root) return [];
  var res = [];
  var dfs = (node, depth, res) => {
    if (node) {
      if (!res[depth]) {
        res[depth] = [];
      }
      res[depth].push(node.val);
      dfs(node.left, depth++, res);
      dfs(node.right, depth++, res);
    }
  };
  dfs(root, 0, res);
  return res;
};
