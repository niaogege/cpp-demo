/*
 * @Author: Chendapeng
 * @Date: 2021-06-20 10:49:33
 * @LastEditors: Chendapeng
 * @LastEditTime: 2021-06-23 20:09:50
 * @Description: 
 */
import * as React from 'react'
import type {User} from './index'
interface ListItem {
  name: string,
  personId: string,
  id: number
}
interface TableI {
  list: ListItem[],
  users: User[]
}
const Table: React.FC<TableI> = ({users, list}) => {
  return (
    <table>
      <thead>
        <tr>
          <th>名称</th>
          <th>负责人</th>
        </tr>
      </thead>
      <tbody>
        {
          list.map((project: ListItem) => (
            <tr key={project.id}>
              <td>{project.id}</td>
              <td>{project.name}</td>
              <td>{users.find((user) => user.id === project.personId)?.name}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}
export default Table