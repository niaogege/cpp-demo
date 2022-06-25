/*
 * @Author: Chendapeng
 * @Date: 2022-04-11 22:11:24
 * @LastEditors: Chendapeng
 * @LastEditTime: 2022-04-11 23:00:51
 * @Description: BtnComponent组件使用了一个带有函数prop的HelperProp组件
 */

import HelperProp from './helper'

export function BtnComponent() {
  return (
    <HelperProp<boolean> 
    initialState={true}
    render=
      {
        ({
          isDisplayed,
          hide,
          show
        }) => (
          <div>
          {
            isDisplayed ?
              <button onClick={hide}>Click to hide</button>
              :
              <button onClick={show}>Click to display</button>
          }
          </div>
        )
      }
    >
    </HelperProp>
  )
}