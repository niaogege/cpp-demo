/*
 * @Author: Chendapeng
 * @Date: 2021-06-13 18:18:56
 * @LastEditors: Chendapeng
 * @LastEditTime: 2022-02-21 10:46:00
 * @Description: test
 */
import * as React from 'react'
import {PageDecoratorFunction} from '../../pages/Decorator'
import Header from './Header'
import Content from './Content'
import './index.css'

function Hook(): React.ReactElement {
  return (
    <div className='wrapper'>
      <header className='header'>
        <Header />
      </header>
      <div className='cont'>
        <Content />
      </div>
    </div>
  )
}
export default PageDecoratorFunction({color: 'green'})(Hook)