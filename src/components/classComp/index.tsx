/*
 * @Author: Chendapeng
 * @Date: 2021-06-14 14:54:03
 * @LastEditors: Chendapeng
 * @LastEditTime: 2021-08-11 14:52:13
 * @Description: 
 */
import * as React from 'react'
// import defaultState from '../reudx/test1/rootReducer'
// import {
//   store
// } from '../reudx/test2/index'
import ClassComp from '../../tsDemo/generics'
export default function ClassCompnent(): React.ReactElement {
  // console.log('111', store);
  // console.log('redux', defaultState.getState());
  // const store = defaultState.getState()
  return (
    <div>
      <h1>
        class-- 
        {/* {store.defaultReducer}---{store.firstState}--{store.secondState} */}
      </h1>
      <ClassComp className='202206'/>
    </div>
  )
}