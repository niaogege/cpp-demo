/*
 * @Author: Chendapeng
 * @Date: 2021-07-10 19:14:54
 * @LastEditors: Chendapeng
 * @LastEditTime: 2022-11-27 14:01:25
 * @Description: 
 */
import React, { Component } from 'react'
import Footer from './Todos/Footer'
import { PageDecorator, IIHoc } from './Decorator/index'
import { BtnComponent } from './RenderProp/index'
type TestNumber<T> = { items: T[] }
class TestInstance<T> extends Component<
  TestNumber<T>,
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
    const { count } = this.state
    return (
      <div>
        <div>This is TestInstance {count}</div>
        <BtnComponent />
      </div>
    )
  }
}
const TestHoc = IIHoc(TestInstance, [99, 88])

@PageDecorator({ color: 'red' })
class PageIndex extends Component {
  componentDidMount() {
    console.log('业务组件 did Page DidMount');
  }
  render() {
    return (
      <div>
        <TestHoc />
        {/* <AddTodo />
        <VisibleTodoList /> */}
        <Footer />
      </div>
    )
  }
}

export class PageIndex2 extends Component {
  componentDidMount() {
    console.log('业务组件 did Page didmount');
  }
  render() {
    return (
      <div style={{
        display: 'flex',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        this is Test 11
      </div>
    )
  }
}

export {
  PageIndex,
}
export default PageIndex