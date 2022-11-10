/*
 * @Author: Chendapeng
 * @Date: 2021-07-27 17:31:15
 * @LastEditors: Chendapeng
 * @LastEditTime: 2022-07-06 19:14:52
 * @Description: 
 */
declare global {
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  interface Window {
    __POWERED_BY_QIANKUN__?: boolean;
    __INJECTED_PUBLIC_PATH_BY_QIANKUN__?: string;
    __QIANKUN_DEVELOPMENT__?: boolean;
    Zone?: CallableFunction;
  }
}
// declare type Window = Window & {
//   __POWERED_BY_QIANKUN__: string;
// };
/*
 * @Author: Chendapeng
 * @Date: 2021-07-06 18:17:20
 * @LastEditors: Chendapeng
 * @LastEditTime: 2021-07-09 14:48:32
 * @Description: 类型声明
 */
// 全局声明文件
declare namespace Comp {
  export const CompName = 'this is Global'
  type TArea = (width: number, height: number) => number;
  type Params = Parameters<TArea>

  type MockReturnT = ReturnType<TArea>
  
  type MockParameters<T extends (...args: any) => any> = T extends (
    ...args: infer P
    ) => any 
      ? P 
      : never;

  type MockReturnType<T extends (...args: any) => any> = T extends (
    ...args: any
  ) => infer R
    ? R
    : any
  type IProps2 = {
    name: string;
    hobby: string
  }
}


 
interface IProps2 {
  name: string;
  hobby: string;
}

export type MockPick<T, K extends keyof T> = {
  [P in K]: T[P]
}
export type MockPartial<T> = {
  [P in keyof T]?: T[P]
}
export type TestPartial = {
  name: string;
  age: number;
}
export type TestPartial2 = Partial<TestPartial>
export type MockRecord<K extends keyof any, T> = {
  [P in K]: T
}

declare interface SchemaBase {
  app: string;
  group: string;
  businessKey: string;
  schemaKey: string;
}
type MockScheme = MockPick<SchemaBase, 'app' | 'group'>
// 实现一个ts Include
type Include<T, K extends T> = K 

type MockExtract<T, U> =  T extends U ? T: never
