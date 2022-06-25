/*
 * @Author: Chendapeng
 * @Date: 2021-06-24 20:45:14
 * @LastEditors: Chendapeng
 * @LastEditTime: 2021-07-10 12:39:46
 * @Description: 
 */
// import {
//   useArray
// } from '../../util/learnTs'
interface Per {
  name: string,
  age: number
}
// export const TSReact = () => {
//   const persons: Per[] = [
//     {
//       name: 'cpp', age: 30
//     },
//     {
//       name: 'wmh', age: 22
//     }
//   ]
//   const {
//     value, clear, removeIndex, add
//   } = useArray(persons)

// }
export default () => {
  return (
    <div>
      demo ts
    </div>
  )
}

export interface Action<T = any> {
  type: T
}

/**
 * An Action type which accepts any other properties.
 * This is mainly for the use of the `Reducer` type.
 * This is not part of `Action` itself to prevent types that extend `Action` from
 * having an index signature.
 */
export interface AnyAction extends Action {
  // Allows any extra properties to be defined in an action.
  [extraProps: string]: any
}
const Test1: Action<string> = {
  type: 'name'
}
const Test1Any: AnyAction = {
  type: 'name',
  age: 2222
}