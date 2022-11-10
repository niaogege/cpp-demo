/*
 * @Author: Chendapeng
 * @Date: 2021-06-13 10:41:00
 * @LastEditors: Chendapeng
 * @LastEditTime: 2022-06-30 00:08:06
 * @Description: 
 */
import * as React from 'react';
import './App.css';
import routers, { IRouterProps } from './route'
import BasicLayout from './layout/basicLayout'
import {
  Route, Switch, Redirect, BrowserRouter, HashRouter, Link
} from 'react-router-dom'
// import {
//   BrowserRouter,
//   Link
// } from './react-router/react-router-dom/modules'
import ReactRouterDemo from './react-router';
import last from './IOC/index'
import { student1, student2 } from './designMode/decorator'
// console.log(last, 'lastlast')
import { person } from './designMode/props'
const App: React.FC = () => {
  const isLogin = true;
  console.log(student1, student1.speak())
  console.log(student2, student2.speak())
  console.log(person, 'person')
  person.name = 'chendapemng'
  // console.log(person, 'LAST')
  return (
    <BrowserRouter>
      <ul style={{
        padding: '10px 20px'
      }}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/react-router">Router</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/:path" children={<ReactRouterDemo />} />
      </Switch>
      <Switch>
        {
          routers.map((item: IRouterProps, index: number) => {
            return (
              <Route
                key={index}
                exact
                path={item.path}
                render={
                  (props: any) => {
                    if (!item.isNeedLogin || isLogin) {
                      if (item.isNeedLogin) {
                        return (
                          <BasicLayout {...props}>
                            <item.component {...props}></item.component>
                          </BasicLayout>
                        )
                      } else {
                        return (
                          <item.component {...props}></item.component>
                        )
                      }
                    } else {
                      return (
                        <Redirect exact to={'/login'}></Redirect>
                      )
                    }
                  }
                }
              >
              </Route>
            )
          })
        }
      </Switch>
    </BrowserRouter>
  )
}
export default App;
