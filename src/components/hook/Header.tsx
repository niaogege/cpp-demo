/*
 * @Author: Chendapeng
 * @Date: 2022-02-21 10:28:44
 * @LastEditors: Chendapeng
 * @LastEditTime: 2022-02-21 10:32:04
 * @Description: 
 */
import Pubsub from 'pubsub-js'

 const Header = () => {
  const publishTopic = () => {
    Pubsub.publish(
      'hardWork', {
        name: 'from header'
      }
    )
  }
  return (
    <div>
      this is publish
      <button onClick={publishTopic}>publish topic</button>
    </div>
  )
 }
 export default Header