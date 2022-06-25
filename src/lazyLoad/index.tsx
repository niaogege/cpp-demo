/*
 * @Author: Chendapeng
 * @Date: 2021-11-09 19:26:44
 * @LastEditors: Chendapeng
 * @LastEditTime: 2022-02-07 10:38:06
 * @Description: 图片懒加载
 * https://zhuanlan.zhihu.com/p/55311726
 * https://codesandbox.io/s/elegant-mestorf-fso67?file=/src/intersection-lazyload.tsx:446-462
 */
import { useEffect, useRef, FC, memo } from 'react'
import ImagesList from './utils'
import d2 from './assets/d2.png'
// import XiDing from './xiding'
import './index.css'

const LazyLoad: FC<{}> = memo(() => {
  const LoadImgRef = useRef(
    new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        const {
          isIntersecting,
          target,
        } = entry
        const _target = (target as HTMLImageElement)
        if (isIntersecting) {
            _target.src = _target.dataset.src ?? '';
            _target.onload = () => {
              _target.style.opacity = '1'
          }
          LoadImgRef.current.unobserve(_target)
        } 
      })
    }, {
      root: null
    }
  ))  

  useEffect(() => {
    let observerRef = LoadImgRef.current
    let Imgs = document.querySelectorAll('[data-src]');
    Array.from(Imgs).forEach((e) => {
      observerRef.observe(e)
    })
    return () => {
      LoadImgRef && observerRef.disconnect()
    }
  }, [])

  // const XidingRef = useRef(
  //   new IntersectionObserver((entries) => {
  //     let current = entries[0]
  //     console.log('current', current);
  //     const {
  //       // target,
  //       intersectionRect: {
  //         top
  //       },
  //     } = current
  //     console.log('top', top);
  //     // const bindElement = document.getElementById('xiding') as HTMLDivElement;
  //     if (top < 10) {
  //       console.log('in', top);
  //     } else {
  //       console.log('leave', top);
  //     }
  //     // if (top < 5) {
  //     //   console.log('top < 5');
  //     //   bindElement.classList.add('fixed')
  //     // } else {
  //     //   bindElement.classList.remove('fixed')
  //     // }
  // }, {
  //   threshold: 0,
  //   root: document.getElementById('lazyImg'),
  // }))

  // useEffect(() => {
  //   const xiDing = XidingRef.current
  //   const container = document.querySelector('.parent-lazy');
  //   container && xiDing.observe(container)
  //   return () => {
  //     xiDing && xiDing.disconnect()
  //   }
  // }, [])

  return (
    <section  style={{
      width: '100%',
      height: '700px',
      overflow: 'auto',
      border: '1px solid red'
    }}>
    <div className='parent-lazy'  
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexFlow: 'row wrap',
        position: 'relative',
        border: '1px solid black'
      }}>
      <div 
        id='xiding'
        className="xiding"
        >
        this is Xiding
      </div>
        {
          ImagesList && ImagesList.map((el, index) => {
            return (
              <div key={index} className='every' style={{
                maxHeight: 400,
                maxWidth: 400,
                height: 400,
                width: 500,
              }}>
                <img src={d2} alt={`${index}`} data-src={el} width={'100%'} height={'100%'} style={{
                opacity: '0', 
                transition: '.3s',
                objectFit: 'cover',
                }}/>
                <span>{index}</span>
              </div>
            )
          }) 
        }
      </div>
    </section>

  )
})

export default LazyLoad;
