/*
 * @Author: Chendapeng
 * @Date: 2022-04-11 22:56:05
 * @LastEditors: Chendapeng
 * @LastEditTime: 2022-04-11 23:00:14
 * @Description: 使用HOC实现高阶组件
 */

import {Component, FC} from 'react'

function HocHelper(WrappedComponent: FC, initialState: boolean) {
  return class HocInner extends Component<any, any> {
    constructor(props: any) {
      super(props);
      this.state = {
        isDisplayed: initialState
      };
    }
    hide = () => {
      this.setState({
        isDisplayed: false,
      });
    }
    show = () => {
      this.setState({
        isDisplayed: true,
      });
    }
    render() {
      return <WrappedComponent
          isDisplayed={this.state.isDisplayed}
          show={() => this.show()}
          hide={() => this.hide()}
          {...this.props} 
        />;
    }
  }
}

// 定义 按钮组件
let ButtonComponent = ({ isDisplayed, hide, show }: any) => {
  return (
    <div>
      {
        isDisplayed ?
          <button onClick={hide}>Click to hide</button>
          :
          <button onClick={show}>Click to display</button>
      }
    </div>
  );
}
// 使用高阶组件，并设定默认值
export default HocHelper(ButtonComponent, true);