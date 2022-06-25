/*
 * @Author: Chendapeng
 * @Date: 2021-07-07 10:59:25
 * @LastEditors: Chendapeng
 * @LastEditTime: 2022-06-12 20:30:10
 * @Description: 
 */
import React, { useEffect, useCallback, useState } from 'react'
import { getAlbumData, getTrackData, source } from '../../api/album'
const ReduxPages: React.FC = () => {
  const [dataA, setDataA] = useState({
    data: [],
    name: ''
  })
  const [dataB, setDataB] = useState([])
  const getFetchData1 = useCallback(() => {
    Promise.resolve(getAlbumData()).then((data) => {
      if (data) {
        setDataA({
          data: data.data,
          name: data.name
        })
      }
    }).catch((e) => {
      console.log('getFetchData1', e);
    })
  }, [])
  const getFetchData2 = () => {
    try {
      const getData = async () => {
        const tt = await getTrackData() || {
          data: []
        }
        setDataB(tt?.data)
      }
      getData()
    } catch (err) {
      console.log('err', err);
    }
  }
  useEffect(() => {
    getFetchData1()
  }, [getFetchData1])
  const cancelQuest = () => {
    source.cancel('CPp need cancel')
    console.log('Abort', source);

    // controller.abort()
    // source.cancel('Operation canceled by the user.!!!!');
    // console.log(controller, 'AFTER')
  }
  return (
    <div>
      <button onClick={getFetchData1}>专辑数据请求1</button>
      <button onClick={getFetchData2}>声音数据请求2</button>
      <h1>专辑- {dataA.data.length} - {dataA.name}</h1>
      <h1>声音- {dataB.length}</h1>
      <button onClick={cancelQuest}>终止控制器</button>
    </div>
  )
}
export default ReduxPages