/* eslint-disable react-hooks/rules-of-hooks */
/*
 * @Author: Chendapeng
 * @Date: 2021-08-15 20:17:51
 * @LastEditors: Chendapeng
 * @LastEditTime: 2021-11-18 14:08:20
 * @Description: 手写洋葱模型
 * https://www.cnblogs.com/xiaosongJiang/p/10854467.html
 */

var m1 = async (req, res, next) => {
  console.log('m1 start');
  const res1 = await next()
  console.log('m1 ————', res1);
}

// var m2 = async (req, res, next) => {
//   console.log('m2 start');
//   const res2 = await next()
//   console.log('m2 ————', res2);
//   return 'middleware2 end'
// }

var m2 = (req, res, next) => {
  console.log('middleware 2');
  new Promise((resolve) => {
    setTimeout(() => {resolve('middle2')}, 1000)
  }).then(res => {
    console.log(res, '2then');
    next()
  })
}

var m3 = async (req, res, next) => {
  console.log('m3 start');
  const res3 = await next()
  console.log('m3 ————', res3);
  return 'middleware3 end'
}

const middlewares = [m1, m2, m3]

function use(req, res) {
  const next = () => {
    const middleware = middlewares.shift()
    if (middleware) {
      return Promise.resolve(middleware(req, res, next))
    } else {
      return Promise.resolve('end 结束了')
    }
  }
  next()
}
use()

function compose (middleware) {
  if (!Array.isArray(middleware)) throw new TypeError('Middleware stack must be an array!')
  for (const fn of middleware) {
    if (typeof fn !== 'function') throw new TypeError('Middleware must be composed of functions!')
  }
  return function (context, next) {
    let index = -1
    return dispatch(0)
    function dispatch (i) {
      // index会在next()方法调用后累加，防止next()方法重复调用
      if (i <= index) return Promise.reject(new Error('next() called multiple times'))
      index = i
      let fn = middleware[i]
      if (i === middleware.length) fn = next
      if (!fn) return Promise.resolve()
      try {
        // 核心代码
        // 包装next()方法返回值为Promise对象
        return Promise.resolve(fn(context, dispatch.bind(null, i + 1)));
      } catch (err) {
        // 遇到异常中断后续中间件的调用
        return Promise.reject(err)
      }
    }
  }
}