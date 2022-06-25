import React, {Component} from "react"

/*
 * @Author: Chendapeng
 * @Date: 2021-09-29 16:20:33
 * @LastEditors: Chendapeng
 * @LastEditTime: 2022-04-11 22:22:24
 * @Description: 装饰器
 */
interface Params {
  [propName: string]: any;
}
export const PageDecorator = (params: Params) => {
  return (WrappedComponent: typeof Component) => {
    return class PageBgColor extends Component {
      componentDidMount() {
        console.log('装饰器 didMount ');
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

export const PageDecoratorFunction = (params: Params) => {
  return (WrappedComponent: React.FC) => {
    return (props: Params) => {
        return (
          <div style={{backgroundColor: `${params.color}`}}>
            <WrappedComponent {...props}/>
          </div>
        )
    }
  }
}

export const IIHoc = (WrappedComponent: typeof Component, data: number[]) => {
  return class extends Component {  
    componentDidMount() {
      console.log('IIHoc 装饰器 didMount');
    }
    render() {
      return (
        <div style={{backgroundColor: `red`}}>
          <h1>Inner Title - {data[0]}</h1>
          <WrappedComponent {...this.props}/>
        </div>
      )
    }
  }
}