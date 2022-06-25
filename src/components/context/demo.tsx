/*
 * @Author: Chendapeng
 * @Date: 2021-06-17 17:34:50
 * @LastEditors: Chendapeng
 * @LastEditTime: 2021-06-17 17:34:50
 * @Description: 
 */
/*
 * @Author: Chendapeng
 * @Date: 2021-06-17 16:45:05
 * @LastEditors: Chendapeng
 * @LastEditTime: 2021-06-17 17:33:59
 * @Description: 
 */
import * as React from 'react'
type contextType = {
  name: string,
  theme: 'dark' | 'light'
}
export const themeContext = React.createContext<contextType>({
  name: 'wmh',
  theme: 'dark'
})
export default function contextTest(props: any): React.ReactElement {
  return (
    <themeContext.Provider
      value={
        {
          theme: 'dark',
          name: 'cpp'
        }
      }
    >
      {props.children}
    </themeContext.Provider>
  )
}

