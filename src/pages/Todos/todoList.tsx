/*
 * @Author: Chendapeng
 * @Date: 2021-07-10 18:17:21
 * @LastEditors: Chendapeng
 * @LastEditTime: 2021-07-10 20:09:58
 * @Description: 
 */

import React from 'react'
import Todo from './todo'

type TodoProp = {
  id: number;
  completed: boolean;
  text: string;
}
interface TodoListI {
  todos: TodoProp[];
  onTodoClick: (id: number) => void;
}
const TodoList: React.FC<TodoListI> = ({ todos, onTodoClick }) => {
  console.log('todos', todos);
  return (
    <ul>
      {todos.map(todo => (
        <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
      ))}
    </ul>
  )
}



export default TodoList