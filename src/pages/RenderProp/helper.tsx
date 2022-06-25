/*
 * @Author: Chendapeng
 * @Date: 2022-04-11 22:06:53
 * @LastEditors: Chendapeng
 * @LastEditTime: 2022-04-11 22:48:51
 * @Description: Render Props 是指一种在 React 组件之间使用一个值为函数的 prop 共享代码的简单技术。
 */
import { Component, FC } from "react";

type HelpProps<T> = {
  initialState: T;
  // children?: FC<{
  //   isDisplayed: boolean;
  //   hide: () => void;
  //   show: () => void;
  // }>;
  render: FC<{
    isDisplayed: boolean;
    hide: () => void;
    show: () => void;
  }>
}
type HelpState = {
  isDisplayed: boolean
}
class RenderPropsTest<T> extends Component<HelpProps<T>, HelpState> {
  constructor(props: any) {
    super(props);
    this.state = {
      isDisplayed: props.initialState || false,
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
    // return this.props.children({
    //   ...this.state,
    //   hide: this.hide,
    //   show: this.show,
    // });
    return this.props.render({
      ...this.state,
      hide: this.hide,
      show: this.show,
    })
  }
}

export default RenderPropsTest