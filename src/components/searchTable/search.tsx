/*
 * @Author: Chendapeng
 * @Date: 2021-06-20 10:49:24
 * @LastEditors: Chendapeng
 * @LastEditTime: 2021-06-24 09:00:36
 * @Description: 
 */
import * as React from 'react'
// import styles from './index.less'
interface Param {
    name: string,
    personId: string
}
interface User {
  id: string,
  name: string
}
interface SearchParamI {
  param: Param,
  setParam: (value: Param) => void,
  users: User[],
}

const SearchParam: React.FC<SearchParamI> = ({
  param,
  setParam,
  users,
}) => {

  return (
    <div>
      这里是查询
      <input value={param.name} onChange={(evt) => setParam({
        ...param,
        name: evt.target.value
      })} />
      <select value={param.personId} onChange={(evt) => setParam({
        ...param,
        personId: evt.target.value
      })}>
        {/* <option value=''>负责人</option> */}
        {
          users.map((user) => (<option key={user.id} value={user.id}>{user.name}</option>))
        }
      </select>
    </div>
  )
}
export default SearchParam