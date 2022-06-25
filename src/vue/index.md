<!--
 * @Author: Chendapeng
 * @Date: 2021-12-17 17:33:13
 * @LastEditors: Chendapeng
 * @LastEditTime: 2021-12-17 17:39:37
 * @Description: Vue相关的面试题重温
-->

### 实现一个简单的vue
实现 ob 和 watch 方法，希望当方法传入 watch 函数时会执行一次，之后每次修改 data 上的属性时，会触发对应的 console

```js
  const data = obServer({ count: 0, foo: 'test' });

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
```

```js
// 实现一个思路 Observer 观察者，观察者有变化出发watch里回调函数
// 观察者
class Observer {

}
// 
class Watch {
  constructor(cb) {
    this.cbs.push(cb)
  }
  notify() {

  }
}

```
