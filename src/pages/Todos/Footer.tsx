/*
 * @Author: Chendapeng
 * @Date: 2021-07-10 18:27:15
 * @LastEditors: Chendapeng
 * @LastEditTime: 2021-07-10 18:27:15
 * @Description: 
 */
import React from 'react'
import FilterLink from '../containers/FilterLink'

const Footer = () => (
  <p>
    Show:
    {' '}
    <FilterLink filter="SHOW_ALL">
      All
    </FilterLink>
    {', '}
    <FilterLink filter="SHOW_ACTIVE">
      Active
    </FilterLink>
    {', '}
    <FilterLink filter="SHOW_COMPLETED">
      Completed
    </FilterLink>
  </p>
)

export default Footer