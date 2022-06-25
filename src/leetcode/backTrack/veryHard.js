/*
 * @Author: Chendapeng
 * @Date: 2021-11-10 09:22:15
 * @LastEditors: Chendapeng
 * @LastEditTime: 2021-11-15 21:47:30
 * @Description: 困难模式
 */
 
// N皇后
/**
 * @param {number} n
 * @return {string[][]}
 */
 var solveNQueens = function(n) {
  // 初始化数组 [[...], [...], [...]]
    var res = [],path = new Array(n).fill().map(() => new Array(n).fill('.'));
    var backTrack = (row) => {
    // row 代表某一行
    // col 代表某一列 
    if(row === n) {
      let stringsPath = path.slice();
      for(let i = 0;i < n;i ++) {
        stringsPath[i] = stringsPath[i].join('')
      }
      res.push(stringsPath)
      return false
    }
    for(let col = 0; col < n; col ++) {
      if (isValid(row, col, path)) {
        path[row][col] = 'Q'
        backTrack(row + 1)
        path[row][col] = '.'
      }
    }
    }
    backTrack(0)
    return res
};
function isValid(row, col, path) {
  // 正上方
  let n = path.length
  for(let i = 0; i < row; i ++) {
    if(path[i][col] === 'Q') return false
  }
  // 左上方45
  for (let i = row-1,j = col-1; i >= 0 && j >= 0; i--,j--) {
    if(path[i][j] === 'Q') return false
  }
  // 右上方
  for(let i = row-1,j = col + 1; i >= 0 && j < n; i--, j++) {
    if(path[i][j] === 'Q') return false
  }
  return true
}
