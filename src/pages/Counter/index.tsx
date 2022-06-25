/*
 * @Author: Chendapeng
 * @Date: 2021-07-10 16:52:38
 * @LastEditors: Chendapeng
 * @LastEditTime: 2022-05-12 21:58:06
 * @Description: 
 */
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount, incrementSync, selectCount } from './Count'
import ConnectCom from './connect'

const Counter = () => {
  const count = useSelector(selectCount)
  const dispatch = useDispatch()
  return (
    <>
      <div>
        <div>
          <button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <span>{count}</span>
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
          <button
            aria-label="Decrement Ten value"
            onClick={() => dispatch(incrementByAmount(100))}
          >
            custrom +10
          </button>
          <button
            aria-label="Decrement Ten value"
            onClick={() => dispatch(incrementSync(100))}
          >
            异步加载 custrom +10
          </button>
        </div>
      </div>
      <ConnectCom />
    </>
  )
}
export default Counter