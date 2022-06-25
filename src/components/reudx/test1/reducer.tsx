/*
 * @Author: Chendapeng
 * @Date: 2021-06-24 20:19:08
 * @LastEditors: Chendapeng
 * @LastEditTime: 2021-06-27 19:35:55
 * @Description: 
 */
type Action = () => void

export const theFirstReducer = (state = 1, action: Action) => state ++

export const theSecondReducer = (state = 2, action: Action) => state --

const defaultReducer = (state = 0, action: Action) => state

export default defaultReducer