/*
 * @Author: Chendapeng
 * @Date: 2021-07-10 18:02:10
 * @LastEditors: Chendapeng
 * @LastEditTime: 2021-07-12 09:41:20
 * @Description: 
 */
let nextTodoId = 0
export const addTodo = (text: string) => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}

export const setVisibilityFilter = (filter: any) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleTodo = (id: number) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}

