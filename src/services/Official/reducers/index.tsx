/*
 * @Author: Chendapeng
 * @Date: 2021-07-09 20:49:55
 * @LastEditors: Chendapeng
 * @LastEditTime: 2021-08-01 16:56:34
 * @Description: 
 */

import {combineReducers} from 'redux'
import todos from './todo'
import visibilityFilter from './visibilityFilter'
// import {infoChange} from './info'

export const todoApp = combineReducers({
  visibilityFilter,
  todos,
  // infoChange
})
export default todoApp
