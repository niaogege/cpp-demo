/*
 * @Author: Chendapeng
 * @Date: 2021-12-20 16:13:06
 * @LastEditors: Chendapeng
 * @LastEditTime: 2021-12-20 16:22:49
 * @Description: 图片懒加载
 */
import defaultSrc from ''

const lazyLoadImg = (imgs) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0) {
        entry.target.src = defaultSrc;
      }
    })
  })
  imgs.forEach((img) => observer.observe(img))
}

export default lazyLoadImg