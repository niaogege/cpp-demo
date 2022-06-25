/*
 * @Author: Chendapeng
 * @Date: 2021-11-09 21:43:46
 * @LastEditors: Chendapeng
 * @LastEditTime: 2021-11-09 21:53:03
 * @Description: 自定义hooks
 */

import { useEffect, useState } from "react"

const useViewport = () => {
  const [height, setHeight] = useState(window.innerHeight)
  
  useEffect(() => {
    const handleWindowResize = () => setHeight(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, [])
  return {height}
}
export default useViewport