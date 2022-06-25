/*
 * @Author: Chendapeng
 * @Date: 2021-07-07 18:54:23
 * @LastEditors: Chendapeng
 * @LastEditTime: 2021-07-12 09:41:13
 * @Description: 
 */
import React, {useState} from "react";
import {initialInfo} from '../../services/Official/reducers/info'

type IniType = typeof initialInfo;

type InfoProps = {
  info: IniType;
  onChangeNameInfo: (val: string) => void;
  onChangeAgeInfo: (val: number) => void;
}

const FreeCode: React.FC<InfoProps> = ({
  info,
  onChangeNameInfo
}) => {
  const [count, setCount] = useState(0)
  const ref = React.useRef({
    hasRender: false
  })
  const [mockRef, setMockRef] = useState(false)
  const addOne = () => {
    // setCount(count + 1)
    // setCount(count + 1)
    setCount(pre => pre + 1)
    setCount(pre => pre + 1)
    setMockRef(true)
  }
  React.useEffect(() => {
    if (!ref.current.hasRender) {
      ref.current.hasRender = true
      console.log('perform action only once');
    }
  }, [])
  React.useEffect(() => {
    console.log('1111222');
    if(!mockRef) {
      console.log('mockRefmockRef');
    }
  })
  const onChangeN = (e: unknown) => {
    console.log('e', e);
  }
  return (
    <div>
      <h3>{count}</h3>
      <button onClick={addOne}> + 加1 </button>
      <section>
        <h3>目前的姓名：{info.name}</h3> 
          <input onChange={onChangeN}></input>
        <h4>年龄： {info.age} </h4>
        <h4>最大的爱好：{info.hobby}</h4>
      </section>
    </div>
  )
}

export default FreeCode