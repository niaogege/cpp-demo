/*
 * @Author: Chendapeng
 * @Date: 2021-07-10 18:15:14
 * @LastEditors: Chendapeng
 * @LastEditTime: 2021-07-10 19:51:41
 * @Description: 
 */
import React from 'react'

interface TodoI {
  onClick: () => void;
  completed: boolean;
  text: string;
}

const Todo: React.FC<TodoI> = ({ onClick, completed, text }) => (
  <li
    onClick={onClick}
    style={ {
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
  </li>
)

export default Todo