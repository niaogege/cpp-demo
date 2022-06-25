/*
 * @Author: Chendapeng
 * @Date: 2021-06-17 16:45:05
 * @LastEditors: Chendapeng
 * @LastEditTime: 2021-06-17 17:35:07
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
export default class themeProvider extends React.Component {
  render() {
    return (
      <themeContext.Provider
        value={
          {
            theme: 'dark',
            name: 'cpp'
          }
        }
      >
        {this.props.children}
      </themeContext.Provider>
    )
  }
}