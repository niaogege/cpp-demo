/*
 * @Author: Chendapeng
 * @Date: 2021-12-21 19:24:53
 * @LastEditors: Chendapeng
 * @LastEditTime: 2021-12-22 10:22:23
 * @Description: 观察发布者模式
 * 
 */
// 题目： 实现 ob 和 watch 方法，
//希望当方法传入 watch 函数时会执行一次，之后每次修改 data 上的属性时，会触发对应的 console
// 如何让两个不相干的方法结合在一起
function ob(obj) {
  if (!Object.keys(obj).length) return '';
  const keys = Object.keys(obj)
  keys.forEach((key) => {
    var dep = new Dep()
    Object.defineProperty(obj, key, {
      enumerable: true,
      configurable: true,
      get() {
        Dep.target && dep.addSub(Dep.target)
        return obj[key]
      },
      set(val) {
        if (val === obj[key]) return ;
        obj[key] = val
        dep.notify()
      }
    })
  })
}

class Dep {
  constructor() {
    this.subs = []
  }
  addSub(sub) {
    this.subs.push(sub)
  }
  notify() {
    this.subs.forEach((sub) => sub.update())
  }
}

function watch(cb) {
  class Watcher {
    constructor(cb) {
     this.cbs = []
    }
    add(cb) {
      if (!this.cbs) {
        this.cbs = [cb]
      } else {
        this.cbs.push(cb)
      }
    }
    emit() {
      const list = this.cbs.slice()
      list.forEach((fn) => fn())
    }
  }
  var intance = new Watcher()
  intance.add(cb)
  intance.emit()
}

const data = ob({ count: 0, foo: 'test' });

watch(() => {
  console.log('watch-count', data.count);
});
watch(() => {
  console.log('watch-foo', data.foo);
});

data.count += 1;
console.log('showcount', data.count);
delete data.count;
data.foo = 'test2';