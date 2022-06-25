/*
 * @Author: Chendapeng
 * @Date: 2021-09-24 20:06:51
 * @LastEditors: Chendapeng
 * @LastEditTime: 2021-09-25 15:49:28
 * @Description:  前中后序遍历构建二叉树
 */
/** 
 * 分治思想排序
 */

/** 
 * 前序遍历
 * 中序遍历
 * 构建一颗二叉树
 */


function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
var buildTree = function(preorder, inorder) {
  if (!preorder.length || !inorder.length) return null
  let first = preorder.shift()
  var tree = new TreeNode(first)
  let Index = inorder.indexOf(first)
  let leftArr = inorder.slice(0, Index)
  let rightArr = inorder.slice(Index+1)
  tree.left = buildTree(preorder, leftArr)
  tree.right = buildTree(preorder, rightArr)
  return tree
};

var preorder = [3,9,20,15,7]
var inorder = [9,3,15,20,7]
var tree = buildTree(preorder, inorder)
console.log(tree, 'tree');

var mergeSort = (arr) => {
  var merge = (right, left) => {
    let res = []
    let i = 0,j = 0
    while(
      i < left.length &&
      j < right.length
    ) {
      if (left[i] < right[j]) {
        res.push(left[i++])
      } else {
        res.push(right[j++])
      }
    }
    while(i < left.length) {
      res.push(left[i++])
    }
    while(j < right.length) {
      res.push(right[j++])
    }
    return res
  }
  var sort = (arr) => {
    if (arr.length === 1) return arr
    let mid = Math.floor(arr.length / 2)
    let left = arr.slice(0, mid)
    let right = arr.slice(mid)
    return merge(mergeSort(left), mergeSort(right))
  }
  return sort(arr)
}
var test = [2,333,41,11,555,6,777,4]
console.log(mergeSort(test));


// 前序+中序构造二叉树
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree1 = function(preorder, inorder) {
    if (!preorder.length || !inorder.length) return null
    let first = preorder.shift()
    var tree = new TreeNode(first)
    let mid = inorder.indexOf(first)
    tree.left = buildTree(preorder.slice(0, mid), inorder.slice(0, mid))
    tree.right = buildTree(preorder.slice(mid), inorder.slice(mid+1))
    return tree
};

// ![image.png](https://pic.leetcode-cn.com/1632555032-XfpayK-image.png);

/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */

var buildTree2 = function(inorder, postorder) {
    if (!inorder.length || !postorder.length) return null
    var last = postorder.pop()
    var tree = new TreeNode(last)
    var mid = inorder.indexOf(last)
    tree.left = buildTree(inorder.slice(0, mid), postorder.slice(0, mid))
    tree.right = buildTree(inorder.slice(mid+1), postorder.slice(mid))
    return tree
};