/*
 * @Author: Chendapeng
 * @Date: 2021-07-11 15:43:05
 * @LastEditors: Chendapeng
 * @LastEditTime: 2021-07-11 17:19:11
 * @Description: 三块 action reuder 容器组件
 */

/**
 * action dispatch(changeAllInfo)
 * reducer 
 * ui
 * container 
 */


/**
 * 全局改变个人信息 action
 * @param info 
 * @returns 
 */
 export const changeNameInfo = (info: unknown) => {
  return {
    type: 'CHANGENAME',
    info: {
      name: info
    }
  }
}
export const changeAgeInfo = (info: unknown) => {
  return {
    type: 'CHANGEAGE',
    info: {
      age: info
    }
  }
}