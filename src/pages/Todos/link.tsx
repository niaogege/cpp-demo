/*
 * @Author: Chendapeng
 * @Date: 2021-07-10 18:20:08
 * @LastEditors: Chendapeng
 * @LastEditTime: 2021-07-11 14:43:03
 * @Description: 
 */
import React from 'react'

interface LinkProps {
  active: boolean;
  children: React.ReactNode;
  onClick: () => void
}
const Link: React.FC<LinkProps>= ({ 
  active, 
  children, 
  onClick 
}) => {
  if (active) {
    return <span>{children}</span>
  }

  return (
    <a
      href="/#"
      onClick={e => {
        e.preventDefault()
        onClick()
      }}
    >
      {children}
    </a>
  )
}

export default Link;
