/*
 * @Author: Chendapeng
 * @Date: 2021-06-14 15:41:52
 * @LastEditors: Chendapeng
 * @LastEditTime: 2021-07-04 21:43:45
 * @Description: 自定义hook
 */
import * as React from 'react'
export default function useCustomHook() {
  const [isLoading, setLoading] = React.useState(false)
  const load = (aPromise: Promise<any>) => {
    setLoading(true)
    return aPromise.then(() => setLoading(false))
  }
  return [isLoading, load]
}