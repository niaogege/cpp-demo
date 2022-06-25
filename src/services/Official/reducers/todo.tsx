/*
 * @Author: Chendapeng
 * @Date: 2021-07-10 18:03:47
 * @LastEditors: Chendapeng
 * @LastEditTime: 2021-07-10 19:19:26
 * @Description: 
 */

const todos = (state = [], action: ActionProps) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
      return state.map((todo: any) =>
        (todo.id === action.id) 
          ? {
              ...todo, 
              completed: !todo.completed
            }
          : todo
      )
    default:
      return state
  }
}

export default todos