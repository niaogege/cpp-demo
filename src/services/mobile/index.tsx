/*
 * @Author: Chendapeng
 * @Date: 2021-07-07 11:38:38
 * @LastEditors: Chendapeng
 * @LastEditTime: 2022-04-28 22:57:03
 * @Description: 
 */

import todoReducer from './todo'
import counterReducer from './counter'
// import { createStore, combineReducers, applyMiddleware } from '../../redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Logger } from './logger'
const storeList = combineReducers({
  counterReducer,
  todoReducer,
})
export default createStore(storeList, {
  counterReducer: 1000,
  todoReducer: {
    count: 10000,
    name: 'redux-'
  }
}, applyMiddleware(Logger))