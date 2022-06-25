import axiosInstance from "./index";
// import axios from "../axios"; // mock source
import axios from "axios"; // source
const CancelToken = axios.CancelToken

export const source = CancelToken.source();
// export const controller = new AbortController()
// 数据 ./redux1
// 本地开启静态服务
export function getAlbumData() {
  return axiosInstance({
    url: 'http://localhost:6060/api/album/data',
    method: 'GET',
    params: {
      name: 'cpp',
      // cancelToken: source.token,
    },
  }
)}

export function getTrackData() {
  return axiosInstance.get('http://localhost:6060/api/track/data', {
    // signal: controller.signal,
    cancelToken: source.token
  })
}

// typeof cancel === 'function' && cancel('CPP is')
// source.cancel('Operation canceled by the user.!!!!'); // 相当于用户手动调用 resolve()
