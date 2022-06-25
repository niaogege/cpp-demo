/*
 * @Author: Chendapeng
 * @Date: 2021-06-20 10:49:15
 * @LastEditors: Chendapeng
 * @LastEditTime: 2022-06-03 18:41:46
 * @Description: 
 */
import * as React from 'react'
import Search from './search'
import Table from './table'
import { cleanObject } from './../../util'
import * as qs from 'qs'
export interface Param {
  name: string,
  personId: string,
}
export interface User {
  id: string,
  name: string
}
const apiUrl = process.env.REACT_APP_API_URL
const SearchTable: React.FC = (props) => {
  const [param, setParam] = React.useState<Param>({
    name: '',
    personId: '',
  })
  const [list, setList] = React.useState([])
  React.useEffect(() => {
    try {
      fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(param))}`).then(async (res) => {
        if (res.ok) {
          setList(await res.json())
        }
      }).catch((e) => {
        console.log(e, 'e')
      })
    } catch (e) {
      console.log(e)
    }

  }, [param])


  const [users, setUsers] = React.useState([])

  React.useEffect(() => {
    try {
      fetch(`${apiUrl}/users`).then(async (res) => {
        if (res.ok) {
          const data = await res.json()
          console.log(data, 'data');
          setUsers(data)
        }
      }).catch(e => console.log(e))
    } catch (e) {
      console.log(e)
    }

  }, [param])
  return (
    <div>
      <Search param={param} setParam={setParam} users={users} />
      <Table list={list} users={users} />
    </div>
  )
}
export default SearchTable