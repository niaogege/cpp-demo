/*
 * @Author: Chendapeng
 * @Date: 2021-06-13 18:55:10
 * @LastEditors: Chendapeng
 * @LastEditTime: 2022-11-27 14:01:56
 * @Description: 路由设置
 */

import Home from './components/home'
import Login from './components/login'
import Hook from './components/hook'
import Hook2 from './components/hook/hook2'
import Hook3 from './lazyLoad/test'
import ClassCom from './components/classComp'
import TestConsumer from './components/context/testConsumer'
import SearchTable from './components/searchTable'
import ReduxOne from './pages/Axios'
import MockRedux from './pages/MockRedux'
import FreeCode from './components/freecode'
import Counter from './pages/Counter/connect'
import PageIndex from './pages/index'
// import ReactRouter from './react-router'
export interface IRouterProps {
  name?: string,
  path?: string,
  component: any,
  isNeedLogin?: boolean
}
const routers: IRouterProps[] = [
  {
    name: '首页', path: '/', component: Home, isNeedLogin: true
  },
  {
    name: '登陆页', path: '/login', component: Login, isNeedLogin: false
  },
  {
    name: 'Hook', path: '/hook', component: Hook, isNeedLogin: true
  },
  {
    name: 'Hook2', path: '/hook2', component: Hook2, isNeedLogin: true
  },
  {
    name: 'Hook3', path: '/hook3', component: Hook3, isNeedLogin: true
  },
  {
    name: 'class', path: '/class', component: ClassCom, isNeedLogin: true
  },
  {
    name: 'createContext', path: '/context', component: TestConsumer, isNeedLogin: true
  },
  {
    name: 'table', path: '/table', component: SearchTable, isNeedLogin: true
  },
  {
    name: 'redux1', path: '/redux1', component: ReduxOne, isNeedLogin: true
  },
  {
    name: 'redux2', path: '/redux2', component: PageIndex, isNeedLogin: true
  },
  {
    name: 'redux3', path: '/redux3', component: MockRedux, isNeedLogin: true
  },

  {
    name: 'freeCode', path: '/freeCode', component: FreeCode, isNeedLogin: true
  },
  {
    name: 'counter', path: '/counter', component: Counter, isNeedLogin: true
  },
  // {
  //   name: 'router', path: '/react-router', component: ReactRouter, isNeedLogin: true
  // }
]

export default routers