/*
 * @Author: Chendapeng
 * @Date: 2021-07-29 20:19:10
 * @LastEditors: Chendapeng
 * @LastEditTime: 2021-07-29 20:20:24
 * @Description: 
 */
interface RequestArgs {
  headers?: object;
  [propName: string]: any;
}
type Method = 'post' | 'get' | 'delete' | 'put' | 'patch';
const baseRequest = (
  url: string,
  method: Method,
  data: any,
  args?: RequestArgs
) => {}

const GET = (url: string, args?: RequestArgs) => (data?: any) =>
  baseRequest(url, 'get', data, args);

export const test = (name: string) => {
  return name.toUpperCase()
}
export const test1 = (name: string) => (data: object) => {
  let Name = name.toUpperCase() + data
  return {name: Name} 
}

export type TTest = ReturnType<typeof test> 
export type TTest1 = ReturnType<typeof test1> 
export type PTest = Parameters<typeof test1>
export type TGet = ReturnType<typeof GET>
