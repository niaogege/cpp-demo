/*
 * @Author: Chendapeng
 * @Date: 2021-07-10 16:38:58
 * @LastEditors: Chendapeng
 * @LastEditTime: 2022-05-12 22:10:27
 * @Description: 
 */
// import { configureStore } from '@reduxjs/toolkit'
// import CounterReducer from '../../pages/Counter/Count'

// export default configureStore({
//   reducer: {
//     counter: CounterReducer
//   }
// })
import { createStore } from "redux";
// import CounterReducer from '../../pages/Counter/Count'
import { reducer } from '../../pages/Counter/commonRedux'
export default createStore(reducer)
