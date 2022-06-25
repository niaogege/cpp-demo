import React from "react"

/*
 * @Author: Chendapeng
 * @Date: 2021-08-11 09:15:51
 * @LastEditors: Chendapeng
 * @LastEditTime: 2021-08-11 14:51:56
 * @Description: 
 */
export {}
type Props = {
  className: string
}
type State = {
  isSum: boolean
}
export default class MyClassName extends React.Component<Props, State>{
  private isSum = false
  private localName = ''
  constructor(props: Props) {
    super(props)
    this.localName = props.className
  }
  render() {
    const {
      isSum, localName
    } = this
    return (
      <div>
        this is diuv {isSum},
        localName is {localName}
      </div>
    )
  }
}