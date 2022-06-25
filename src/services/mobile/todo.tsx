/*
 * @Author: Chendapeng
 * @Date: 2021-07-07 11:39:03
 * @LastEditors: Chendapeng
 * @LastEditTime: 2022-04-28 21:03:21
 * @Description: 
 */

type ActionList = 'ADD_CONST' | 'MINUS_CONST' | 'OTHER'

interface Action {
  type: ActionList,
  payload?: object,
  name: string
}

// appReducer.js
const initialState = { count: 0, name: '' };

export default function todoReducer(state = initialState, action: Action) {
  switch (action.type) {
    case 'ADD_CONST':
      return { count: state.count + 1, name: action.name };
    case 'MINUS_CONST':
      return { count: state.count - 1, name: action.name };
    case 'OTHER':
      return state;
    default:
      return state === undefined ? { count: 0, name: '' } : state;
  }
};