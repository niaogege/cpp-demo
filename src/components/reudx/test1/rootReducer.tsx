/*
 * @Author: Chendapeng
 * @Date: 2021-06-24 20:25:06
 * @LastEditors: Chendapeng
 * @LastEditTime: 2021-06-27 19:14:11
 * @Description: 
 */
import {
  combineReducers, createStore
} from 'redux'
import defaultReducer, {
  theFirstReducer, theSecondReducer
} from './reducer'

const rootReducer = combineReducers({
  defaultReducer,
  firstState: theFirstReducer,
  secondState: theSecondReducer
})

const reducerInitialStore = createStore(rootReducer)

console.log('reducerInitialStore', reducerInitialStore.getState());
export default reducerInitialStore