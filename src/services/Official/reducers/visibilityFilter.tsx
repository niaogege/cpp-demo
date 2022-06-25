/*
 * @Author: Chendapeng
 * @Date: 2021-07-10 18:09:40
 * @LastEditors: Chendapeng
 * @LastEditTime: 2021-07-10 18:11:39
 * @Description: 
 */

const visibilityFilter = (state = 'SHOW_ALL', action: ActionProps) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

export default visibilityFilter