/*
 * @Author: Chendapeng
 * @Date: 2021-11-28 17:41:42
 * @LastEditors: Chendapeng
 * @LastEditTime: 2022-04-28 20:56:35
 * @Description: 模拟redux
 */
import { useState } from 'react';
import { createStore, applyMiddleware, compose } from 'redux'
import Counter from './Counter'

export interface ActionType {
  type: string;
  payload?: any;
}

const reducer = (state = 0, action: ActionType) => {
  switch (action.type) {
    case 'INCREMENT': return state + 1;
    case 'DECREMENT': return state - 1;
    default: return state;
  }
}

function logger2({ getState }: any) {
  return (next: any) => (action: ActionType) => {
    console.log('Cpp1 will dispatch', action)
    // 调用 middleware 链中下一个 middleware 的 dispatch。
    let returnValue = next(action)
    console.log('Cpp1 End ---- state after dispatch', getState())
    // 一般会是 action 本身，除非
    // 后面的 middleware 修改了它。
    return returnValue
  }
}

function logger3({ getState }: any) {
  return (next: any) => (action: ActionType) => {
    console.log('Cpp2 will dispatch', new Date(), action)
    // 调用 middleware 链中下一个 middleware 的 dispatch。
    let returnValue = next(action)
    console.log('Cpp2 End ---- state after dispatch', new Date(), getState())
    // 一般会是 action 本身，除非
    // 后面的 middleware 修改了它。
    return returnValue
  }
}

const store = createStore(reducer, 0, applyMiddleware(compose(logger2, logger3)))
const MainRedux = () => {
  const [count, setCount] = useState(0)
  store.subscribe(() => {
    setCount(store.getState())
  })

  return (
    <div>
      <Counter
        value={count}
        increment={() => store.dispatch({ type: 'INCREMENT' })}
        decrement={() => store.dispatch({ type: 'DECREMENT' })}
      />
    </div>
  )
}
export default MainRedux