/*
 * @Author: Chendapeng
 * @Date: 2021-12-22 11:20:57
 * @LastEditors: Chendapeng
 * @LastEditTime: 2021-12-23 11:01:59
 * @Description: 吸顶效果
 */
import { FC, useEffect, useRef } from "react"
import './index.css'
const XiDing: FC<{}> = () => {
  const XiRef = useRef(new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const {
        target,
      } = entry
      const _target = target as HTMLDivElement;
      const bindElement = document.getElementById('xiding') as HTMLDivElement;  
      const {
        top
      } = _target.getBoundingClientRect()
      console.log('top', top);
      if (top < 5) {
        bindElement.classList.add('fixed')
      } else {
        bindElement.classList.remove('fixed')
      }
      XiRef.current.unobserve(_target)
    })
  }, {
    threshold: 1
  }))
  // const ElementRef = useRef<Element>()
  useEffect(() => {
    let xiRef = XiRef.current
    const bindElement = document.getElementById('lazyImg') as HTMLDivElement;  
    console.log('bindElement', bindElement);
    xiRef.observe(bindElement)
    return () => {
      xiRef.disconnect()
    }
  }, [])
  return (
    <div 
      // ref={ElementRef}
      className="xiding"
      id='xiding'
      >
      this is Xiding
    </div>
  )
}
export default XiDing