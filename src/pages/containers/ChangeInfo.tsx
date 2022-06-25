/*
 * @Author: Chendapeng
 * @Date: 2021-07-11 16:40:28
 * @LastEditors: Chendapeng
 * @LastEditTime: 2021-07-12 09:40:19
 * @Description: 链接UI组件 触发dispatch 改变store里的信息
 */
import React from 'react'
import {connect} from 'react-redux'
import {changeNameInfo, changeAgeInfo} from '../../services/Official/actions/info'
import FreeCode from '../../components/freecode/index'

const mapStateToProps = (state: any, otherInfo: any) => {
  return {
    info: {
      ...state,
      ...otherInfo
    }
  }
}
const mapDispatchToProps = (dispatch: any, otherInfo: any) => {
  return {
    onChangeNameInfo: (info: any) => {
      dispatch(changeNameInfo(info))
    },
    onChangeAgeInfo: (info: any) => {
      dispatch(changeAgeInfo(info))
    }
  }
}

const InfoRedux = connect(
  mapStateToProps,
  mapDispatchToProps
)(FreeCode)

export default InfoRedux