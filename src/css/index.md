<!--
 * @Author: Chendapeng
 * @Date: 2021-12-30 08:33:51
 * @LastEditors: Chendapeng
 * @LastEditTime: 2021-12-30 10:44:50
 * @Description: 手写css
-->
### 实现一个三角形
```css
  width: '0',
  height: '0',
  borderTop: '50px transparent solid',
  borderBottom: '50px red solid',
  borderLeft: '50px transparent solid',
```

### 用css实现一个扇形
```css
  width: '100px',
  height: '100px',
  background: 'red',
  border-to-left-radius: '100px',
```

### 写个动画，一个盒子，开始时缩放是 0，50%时是 1，100%时是 0，开始结束都是慢速，持续 2 秒，延迟 2 秒，结束后固定在结束的效果
```css
div {
  width: 100px;
  height: 100px;
  animation-delay: 2s;
  animation-name: test; // @keyframes 名称
  animation-duration: 2s;
  animation-timing-function: ease-in-out; // 动画以低速开始和结束。
}
@keyframes test{
  0: {
    scale: 0
  },
  50%: {
    scale: 1
  },
  100%: {
    scale: 0
  }
}
@-webkit-keyframes test{
  0: {
    scale: 0
  },
  50%: {
    scale: 1
  },
  100%: {
    scale: 0
  }
}
```


### animation 和 transition 有什么区别
```js
// transition 示例
div {
    width: 100px;
    height: 100px;
    background: red;
    -webkit-transition: width 2s, height 2s, -webkit-transform 2s; /* For Safari 3.1 to 6.0 */
    transition: width 2s, height 2s, transform 2s;
}
div:hover {
    width: 200px;
    height: 200px;
    -webkit-transform: rotate(180deg); /* Chrome, Safari, Opera */
    transform: rotate(180deg);
}
```
transtion: CSS3 过渡是元素从一种样式逐渐改变为另一种的效果。

要实现这一点，必须规定两项内容：
- 指定要添加效果的CSS属性
- 指定效果的持续时间。

animation:
当在 @keyframes 创建动画，把它绑定到一个选择器，否则动画不会有任何效果。

指定至少这两个CSS3的动画属性绑定向一个选择器：

规定动画的名称: animation-name
规定动画的时长: animation-duration
animation: myTest 5s;

#### 相同点：
他们都是随时间改变元素的属性值
都能开启硬件加速 GPU加速

#### 不同点

1.性能方面：在使用 aniamtion 的时候可以改变很多属性，比如 width、height、postion 等等这些改变文档流的属性的时候就会引起页面的回流和重绘，对性能影响比较大，而使用 transition 的时候一般会结合 tansfrom 来进行旋转和缩放等，不会生成新的位图，就不会引起页面的重绘了

2.transition需要触发一个条件才能改变状态，比如hover的时候 

而animation不需要触发任何事件就会随时间改变属性值

3.transition为两帧(开始和结束)，而animation可以是一帧一帧的，跟随自定义动画而言，自定义动画定义了多少帧就执行多少帧

4.transition为一次性，不会重复发生，除非再次触发，而animation阔以利用属性animation-iteration-count: infinite指定无限次循环播放
