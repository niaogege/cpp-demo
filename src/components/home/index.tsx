/*
 * @Author: Chendapeng
 * @Date: 2021-06-13 18:54:08
 * @LastEditors: Chendapeng
 * @LastEditTime: 2022-04-28 20:27:27
 * @Description: 
 */
import { Button } from 'antd';
import React, { ReactElement } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import TestConsumer from '../context/testConsumer'
import ThemeProvider from '../context/index'
// import { Compose } from '@cpp/tool'
interface Props extends RouteComponentProps { }

//登录系统进入的首页
export default function Home({ history }: Props): ReactElement {
  return (
    <ThemeProvider>
      <div style={{ textAlign: 'right' }}>
        <Button
          onClick={() => {
            history.push('/login');
          }}
        >
          退出
        </Button>
      </div>
      <div style={{ textAlign: 'center', paddingTop: 30, fontSize: 24 }}>
        欢迎使用系统
      </div>
      {/* <TestConsumer>
        <div>
          这里是在provider里面
        </div>
      </TestConsumer> */}
    </ThemeProvider>
  );
}