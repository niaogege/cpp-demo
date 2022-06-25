<!--
 * @Author: Chendapeng
 * @Date: 2021-09-29 11:25:17
 * @LastEditors: Chendapeng
 * @LastEditTime: 2021-09-29 17:58:33
 * @Description: 自分享声音页复盘
-->

1.@withRouter/withRouter(Component)
高阶组件withRouter作用是将一个组件包裹到Route里面，然后 react-router里的三个属性history/location/match会被传入到该组件的props里
```js
import {
  withRouter
} from 'react-router-dom'
const AlbumInfo = ({
  location,
}) => {
  const { search = '' } = location;
  // 固定的跳转到专辑
  let targetUrl = `/selfshare/album/${albumId}/${search}`;
  return <a href={targetUrl} />
}
export default withRouter(AlbumInfo);
```
源码
```js
import {
  Route
} from 'react-router-dom'
const withRouter = ( Component ) => () =>
 <Route component={ Component }/>

export default withRouter
```

总结：withRouter包裹的组件有能力获取到router里到所有参数

2.HOC
高阶组件，是 React 中复用组件逻辑的一种高级技巧，是一种基于 React 组合特性而形成的设计模式。

3.@baseAuido
```js
@baseAudio
class PlayInfo extends Component {
  render() {
    const {
      title,
    } = this.props;
    return (
        <p>
          {title}
        </p>
    );
  }
}
```


### 参考链接
- [谈谈React Hooks 与Vue3.0 Function based API的区别？](https://mp.weixin.qq.com/s/2zEwqc-Ny1WUMKNhj18nTw)