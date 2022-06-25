// import axios from "../axios";
import axios from "axios";
import type {AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios'
const instance: AxiosInstance = axios.create({
  baseURL: '/api',
  timeout: 6000,
  headers: {'content-type': 'XMLHttpRequest'},
})
instance.interceptors.request.use(function success(config: AxiosRequestConfig) {
  // console.log('request1————')
  return config
}, function error(err) {
  console.log('request error——————', err);
})

instance.interceptors.request.use(function success(config: AxiosRequestConfig) {
  // console.log('request2————')
  return config
}, function error(err) {
  console.log('request error——————', err);
})

instance.interceptors.response.use(function success(response: AxiosResponse) {
  // console.log('response 1——————', response);
  let res = {
    ...response,
    data: {
      ...response.data,
      name: 'CPP interceptors'
    }
  }
  return res && res.data
}, function error(err) {
  return Promise.reject(err)
})

instance.interceptors.response.use(function success(response: AxiosResponse) {
  // console.log('response 2——————');
  return response 
}, function error(err) {
  return Promise.reject(err)
})

export default instance
