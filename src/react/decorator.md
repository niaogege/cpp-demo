<!--
 * @Author: Chendapeng
 * @Date: 2021-11-11 15:09:28
 * @LastEditors: Chendapeng
 * @LastEditTime: 2022-04-11 22:03:42
 * @Description: 装饰器相关文档
-->

@baseAudio 是什么用法


高阶组件可以看做是装饰器模式(Decorator Pattern)在React的实现。即允许向一个现有的对象添加新的功能，同时又不改变其结构，属于包装模式(Wrapper Pattern)的一种

装饰器模式

这里主要介绍一下类装饰器，使用类装饰器可以减少一些代码的重复编写。此时装饰器看起来更像是一个父类，但它又不是一个父类，因为被装饰的类重写一些生命周期函数的时候，装饰器里面的生命周期函数并不会被覆盖执行。对于componentDidMount 来说，先执被装饰类的componentDidMount 再执行 装饰器内的componentDidMount；对于componentWillUnmount 来讲先执行装饰器的componentWillUnmount 再执行被装饰的类的componentWillUnmount

```ts
// 定义
interface Params {
  [propName: string]: any;
}
export const PageDecorator = (params: Params) => {
  return (WrappedComponent: typeof Component) => {
    return class PageBgColor extends Component {
      componentDidMount() {
        console.log('装饰器 didMount');
      }
      render() {
        return (
          <div style={{backgroundColor: `${params.color}`}}>
            <WrappedComponent {...this.props}/>
          </div>
        )
      }
    }
  }
}
import {PageDecorator} from './Decorator/index'

// 第一种使用
class TestInstance extends Component<{},
{
  count: number
}> {
  constructor(props: any) {
    super(props)
    this.state = {
      count: 0
    }
  }
  componentDidMount() {
    this.setState({
      count: 1
    })
  }
  render() {
    const {count} = this.state
    return <div>This is TestInstance {count}</div>
  }
}
const TestHoc = IIHoc(TestInstance)

// 第二种使用
@PageDecorator({color: 'red'})
class PageIndex extends Component {
  componentDidMount() {
    console.log('业务组件 did Page');
  }
  render() {
    return (
      <div>
        <TestHoc />
        this is Test
      </div>
    )
  }
}
```