/*
 * @Author: Chendapeng
 * @Date: 2021-06-13 10:41:00
 * @LastEditors: Chendapeng
 * @LastEditTime: 2022-07-07 10:48:50
 * @Description: 
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './public-path';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './tsDemo/index'
// import store from './services/mobile/index'
// import todoApp from './services/Official/reducers/index';
import { Provider } from 'react-redux'
import store from './services/mock-React-redux/store'
// import {createStore} from 'redux'
// const store = createStore(todoApp)
// funcNum1(1,2)
// CPPModule.readName('cpp')
// moduleName('cpp')
function render(props: any) {
  const { container } = props
  const cont: HTMLElement = container ? container.querySelector('#root') : document.querySelector('#root');
  ReactDOM.render(
    // <React.StrictMode>
    <Provider store={store}>
      <App />,
    </Provider>,
    // </React.StrictMode>,
    cont
  );
}

if (!(window as any).__POWERED_BY_QIANKUN__) {
  render({})
}

export async function bootstrap() {
  console.log('[react16] react app bootstraped');
}

export async function mount(props: any) {
  console.log('[react16] props from main framework', props);
  render(props);
}

export async function unmount(props: any) {
  const { container } = props;
  ReactDOM.unmountComponentAtNode(container ? container.querySelector('#root') : document.querySelector('#root'));
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
