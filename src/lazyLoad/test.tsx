/*
 * @Author: Chendapeng
 * @Date: 2022-02-07 10:52:19
 * @LastEditors: Chendapeng
 * @LastEditTime: 2022-02-21 11:03:08
 * @Description: 测试ahooks中的useInViewport
 */
import React, { useRef } from 'react';
import { useInViewport } from 'ahooks';
import Pubsub from 'pubsub-js'
const Test = () => {
  const ref = useRef();
  const [inViewport] = useInViewport(ref);
  const againPublish = () => {
    console.log('publish');
    Pubsub.publish(
      'hardWork', {
        name: 'from lazyLoader'
      }
    )
  }

  return (
    <div>
      <div onClick={againPublish} style={{ width: 300, height: 300, overflow: 'scroll', border: '1px solid' }}>
        scroll here
        <div style={{ height: 800 }}>
          <div
            ref={ref}
            style={{
              border: '1px solid',
              height: 100,
              width: 100,
              textAlign: 'center',
              marginTop: 80,
            }}
          >
            observer dom Cpp
          </div>
        </div>
      </div>
      <div style={{ marginTop: 16, color: inViewport ? '#87d068' : '#f50' }}>
        inViewport: {inViewport ? 'visible' : 'hidden'}
      </div>
    </div>
  );
};

export default Test;