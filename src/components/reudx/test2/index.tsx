/*
 * @Author: Chendapeng
 * @Date: 2021-06-25 19:36:40
 * @LastEditors: Chendapeng
 * @LastEditTime: 2021-07-07 10:58:34
 * @Description: 
 */
import {
  createStore
} from 'redux'
// 第一步 定义state
const iniState = {
  num: 0
}
// 第二步 定义actions
export const actions = {
  add: () => {
    type: 'ADD'
  },
  dec: () => {
    type: 'DECREMENT'
  }
}
// 第三步 定义 reducers
export const FReducer = (state = iniState, action: {
  type: string
} ) => {
  switch(action.type) {
    case 'ADD':
      return {
        num: state.num + 1
      }
    case 'DECREMENT':
      return {
        num: state.num - 1
      }
    default: 
      return state
  }
}
export const store = createStore(FReducer)
export default store
