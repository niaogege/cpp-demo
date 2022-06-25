/*
 * @Author: Chendapeng
 * @Date: 2021-07-10 18:29:39
 * @LastEditors: Chendapeng
 * @LastEditTime: 2021-07-10 20:02:53
 * @Description: 
 */
import { connect } from 'react-redux'
import { toggleTodo } from '../../services/Official/actions'
import TodoList from '../Todos/todoList'
 
type FilterT = 'SHOW_COMPLETED' | 'SHOW_ACTIVE' | 'SHOW_ALL'

const getVisibleTodos = (todos: any[], filter: FilterT) => {
  switch (filter) {
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
    case 'SHOW_ALL':
    default:
      return todos
  }
}

const mapStateToProps = (state: any) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    onTodoClick: (id: number) => {
      dispatch(toggleTodo(id))
    }
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList