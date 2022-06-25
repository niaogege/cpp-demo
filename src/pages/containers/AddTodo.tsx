/*
 * @Author: Chendapeng
 * @Date: 2021-07-10 18:42:35
 * @LastEditors: Chendapeng
 * @LastEditTime: 2021-11-28 16:50:49
 * @Description: 
 */
import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../../services/Official/actions/index'

interface TodoProps {
  dispatch: (val: any) => void;
}
let AddTodo: React.FC<TodoProps> = ({ dispatch }) => {
  let input: any;
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value))
          input.value = ''
        }}
      >
        <input
          ref={node => {
            input = node
          }}
        />
        <button type="submit">
          Add Todo111
        </button>
      </form>
    </div>
  )
}
// AddTodo = connect()(AddTodo)
export default connect()(AddTodo)