/*
 * @Author: Chendapeng
 * @Date: 2021-06-17 16:55:01
 * @LastEditors: Chendapeng
 * @LastEditTime: 2022-05-13 16:36:19
 * @Description: 
 */
import * as React from 'react'
import { themeContext } from './index'

const TTT = (props: any) => {
  const value = React.useContext(themeContext)
  return (
    (
      <h1>
        {value.name}---{props.children}
      </h1>
    )
  )
}
export default TTT