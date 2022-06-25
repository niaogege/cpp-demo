/*
 * @Author: Chendapeng
 * @Date: 2021-06-14 15:15:51
 * @LastEditors: Chendapeng
 * @LastEditTime: 2021-07-11 15:00:31
 * @Description: 
 */
import * as React from 'react';
// import useCustomHook from './useHook';
import CorrectUse from './error';

export default function Hook2(): React.ReactElement {
  // const [isloading, setLoading] = useCustomHook()
  // const [val, setVal] = React.useState(false)
  const [user, setUser] = React.useState({
    name: 'cpp', age: 30
  })
  const showUser = React.useCallback((obj: typeof user) => {
    return `my Name is ${obj.name}, age is ${obj.age}`
  }, [])
  const ref1 = React.useRef<HTMLDivElement>(null)
  React.useEffect(() => {
    console.log('useEffect')
    setUser({
      name: 'wmh',
      age: 22
    })
  }, [])
  const resNum = React.useMemo<number>(() => 2, [])
  console.log(typeof ref1, typeof user)
  return (
    <div>
      this is hook2
      <div>
        {showUser(user)}
      </div>
      <h1>{resNum}</h1>
      <CorrectUse name='cpp' />

    </div>
  )
}