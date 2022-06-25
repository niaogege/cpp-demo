/*
 * @Author: Chendapeng
 * @Date: 2022-02-21 10:28:44
 * @LastEditors: Chendapeng
 * @LastEditTime: 2022-02-21 11:03:38
 * @Description: 
 */
import Pubsub from 'pubsub-js'
import { useEffect, useState } from 'react'

 const Content = () => {
   const [cont, setCont] = useState('')
  useEffect(() => {
    const token = Pubsub.subscribe('hardWork' , (msg, data) => {
      const {name = ''} = data
      setCont(name)
    })
    return () => {
      Pubsub.unsubscribe(token)
      setCont('')
    }
  }, [])
  return (
    <div>
      this is subScribe
      <div>this is {cont}</div>
    </div>
  )
 }

export default Content
