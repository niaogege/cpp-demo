/*
 * @Author: Chendapeng
 * @Date: 2021-07-11 10:40:16
 * @LastEditors: Chendapeng
 * @LastEditTime: 2021-09-05 12:01:56
 * @Description: 
 */

// export function pickValue(obj, key) {
//   return obj[key]
// }

export function PickValue<T extends Object, K extends keyof T>(obj: T, key:K): T[K] {
  return obj[key]
} 
const test1 = {
  name: 'cpp',
  age: 30,
  hobby: 'shufa'
}
PickValue(test1, 'name')
// PickValue(test1, '111')

export function PickSignVal<T>(obj: T, key: keyof T): T[keyof T]{
  return obj[key]
}
PickSignVal(test1, 'age')

export function PickMapVal<T extends Object, K extends keyof T>(obj: T, key: K[]): T[K][] {
  return key.map((e) => obj[e])
}
PickMapVal(test1, ['age', 'name'])

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
export const TestRecord: Record<
  Exclude<keyof typeof test1, 'hobby'>, 
  Pick<typeof test1, 'name'>
> = {
  'name': {
    name: 'cpp'
  },
  'age': {
    name: 'wmh'
  },
}



// 从这个数组推断出 联合类型 name
const tabList = [
  {
    path: '/award',
    name: '奖品配置',
  },
  {
    path: '/task',
    name: '任务配置',
  },
  {
    path: '/signin',
    name: '签到配置',
  }]
  type Tab = typeof tabList
  export type NameT = Tab[0]['name']

declare interface SchemaBase {
  app: string;
  group: string;
  businessKey: string;
  schemaKey: string;
}
export type SchemeT = keyof SchemaBase
export type MockScheme = MockPick<SchemaBase, 'app' | 'group'>
  

[1,2,3].includes(1)

// 实现一个ts Include
export type Include<T, U> = T extends U ? T : never
export type IncludeTest = Include<'a' | 'b' | 'c', 'c'> // 'c'

export type MockReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : any
  interface User {
    id: number;
    age: number;
  }
  interface OtherUser {
    name: string,
    sex: string;
  }
  export type ExcludeUser1 = Extract<'a' | 'b' | 'c', 'd'> // 'c'
  export type ExcludeUser2 = Exclude<keyof User, keyof OtherUser> // 'id' 和 ‘age’
  