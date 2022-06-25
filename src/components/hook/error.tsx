/*
 * @Author: Chendapeng
 * @Date: 2021-07-04 21:45:37
 * @LastEditors: Chendapeng
 * @LastEditTime: 2021-07-07 20:33:17
 * @Description: 
 */

import React, {useCallback, useState, memo} from 'react'
const CorrectUse: React.FC<{name: string}> = ({name}) => {

  const [dataA, setDataA] = useState(0)
  const [dataB, setDataB] = useState(0)
  const onclickA = useCallback(() => {
    setDataA(o => o + 1)
  }, [])
  const onclickB = useCallback(() => {
    setDataB(o => o + 1)
  }, [])

  return (
    <div> this is CorrectUse {name}
      <MemoCheap onCheap={onclickA} name={`组件cheap：${dataA}`} />
      <MemoExpensive onExpensive={onclickB} name={`组件Expensive：${dataB}`} />
    </div>
  )
}
export default CorrectUse

interface CheapProps {
  name: string;
  onCheap?: () => void;
  onExpensive?: () => void;
}
const Cheap: React.FC<CheapProps> = ({name, onCheap}) => {
  console.log('this is cheap')
  return (
    <div>
      <section onClick={onCheap}>
        this is {name} comp
      </section>
    </div>
  )
}
const Expensive: React.FC<CheapProps> = ({name, onExpensive}) => {
  console.log('this is expensive')
  return (
    <div>
      <section onClick={onExpensive}>
        this is {name} com
      </section>
    </div>
  )
}
const MemoExpensive = memo(Expensive)
const MemoCheap = memo(Cheap)
