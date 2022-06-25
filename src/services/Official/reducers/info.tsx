/*
 * @Author: Chendapeng
 * @Date: 2021-07-11 16:29:17
 * @LastEditors: Chendapeng
 * @LastEditTime: 2021-07-11 16:42:32
 * @Description: 
 */
export const initialInfo = {
  name: '',
  age: 30,
  hobby: ''
}
 export const infoChange = (state = initialInfo, action: ActionProps) => {
  switch (action.type) {
    case 'CHANGENAME': 
      return Object.assign({}, state, {
        name: action.namePayload
      })
    case 'CHANGEAGE':
      return Object.assign({}, state, {
        age: action.agePayload
      })
  }
 }