/* eslint-disable no-extend-native */
/*
 * @Author: Chendapeng
 * @Date: 2022-03-08 10:29:15
 * @LastEditors: Chendapeng
 * @LastEditTime: 2022-05-26 16:10:14
 * @Description: Promise相关的api实现
 */
/**
 * @param {*} flag
 * @returns
 */

// 自己尝试实现一下Promise.all
var p1 = (flag = true) => {
  return new Promise((resolve, reject) => {
    if (flag) {
      resolve("p1 success");
    } else {
      reject("p1 failed");
    }
  });
};
var p2 = (flag = true) => {
  return new Promise((resolve, reject) => {
    if (flag) {
      resolve("p2 success");
    } else {
      reject("p2 failed");
    }
  });
};

var ps = [p1(), p2()];
Promise.all(ps)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

Promise.myAll = function (promises) {
  return new Promise((resolve, reject) => {
    let result = [];
    promises.forEach((p, i) => {
      Promise.resolve(p)
        .then((res) => {
          result.push(res);
          if (i === promises.length - 1) {
            resolve(result);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
};
Promise.myAll(ps)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

// 好的promise建议

let totalPosts = 0;

function sleep(time) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, time);
  });
}

async function getPosts(userId) {
  const users = [
    { id: 1, posts: 5 },
    { id: 2, posts: 3 },
  ];
  await sleep(Math.random() * 1000);
  return users.find((user) => user.id === userId).posts;
}

async function addPosts(userId) {
  let tt = await getPosts(userId);
  totalPosts += tt;
}

Promise.all([addPosts(1), addPosts(2)]);
console.log("Post count:", totalPosts);
