/* eslint-disable @typescript-eslint/no-unused-vars */
/*
 * @Author: Chendapeng
 * @Date: 2021-12-11 15:45:00
 * @LastEditors: Chendapeng
 * @LastEditTime: 2022-06-27 18:46:01
 * @Description: 实际练习
 */
// 实现Pick Omit
export interface TestObj {
  name: string;
  age: number;
  one: symbol;
}
type MockInsPick = Pick<TestObj, 'age'>
const myAge: MockInsPick = {age: 11}

type MockInstanceOmit = Omit<TestObj, 'age' | 'one'>
const myName: MockInstanceOmit = {name: 'cpp'}

type KeyInstance = Exclude<keyof TestObj, 'one'> // 剔除one
type InInstance = Extract<keyof TestObj, 'one'> // 交集

type MockPick<T, K extends keyof T> = {
  [P in K]: T[P]
}
type MockOmit<T, K extends string | number | symbol> = {
  [P in Exclude<keyof T, K>]: T[P]
}
type MockInstanceOmitTest = MockOmit<TestObj, 'age' | 'one'>
const myName2: MockInstanceOmitTest = {name: 'cpp'}

const promiseAllTest1 = PromiseAll([1, 2, 3] as const)
const promiseAllTest2 = PromiseAll([1, 2, Promise.resolve(3)] as const)
const promiseAllTest3 = PromiseAll([1, 2, Promise.resolve(3)])

declare function PromiseAll<T>(values: T): Promise<{
  [K in keyof T]: T[K] extends Promise<infer U> ? U : T[K]
}>

interface Cat {
  type: 'cat'
  breeds: 'Abyssinian' | 'Shorthair' | 'Curl' | 'Bengal'
}

interface Dog {
  type: 'dog'
  breeds: 'Hound' | 'Brittany' | 'Bulldog' | 'Boxer'
  color: 'brown' | 'white' | 'black'
}

type MyDog = LookUp<Cat | Dog, 'dog'> // expected to be `Dog`

type LookUp<T, P extends string> = T extends {
  type: infer U
} ? U extends P ? T : never
  : never

type LoopUp2<U extends {type: any}, T extends U['type']> = U extends {type: T} ? U : never;
type MyDog2 = LoopUp2<Cat | Dog, 'dog'> // expected to be `Dog`

// 实现 TrimLeft<T>，将字符串左侧空格清空：

type trimed = TrimLeft<'  Hello World  '> // expected to be 'Hello World  '
type TrimLeft<T extends string> = T extends ` ${infer M}` 
  ? TrimLeft<M>
  : T

type trimmed = Trim<'  Hello World  '> // expected to be 'Hello World'

type Trim<T extends string> = T extends ` ${infer M}`
  ? Trim<M> extends `${infer R} `
   ? Trim<R> : T
  : T

type Trim2<T extends string> = T extends ` ${infer R}` | `${infer R} ` ? Trim2<R> : T;
type T121 = Trim2<'  cpp '> // type T121 = "cpp"

// 
type capitalized = Capitalize1<'hello world'> // expected to be 'Hello world'

type Capitalize1<T extends string> = T extends `${infer F}${infer R}` ? `${Uppercase<F>}${R}` : T;


// replace

type replaced1 = Replace<'types are fun!', 'fun', 'awesome'> // expected to be 'types are awesome!'

type Replace<T extends string, F extends string, L extends string> = 
  T extends `${infer S}${F}${infer E}`
  ? `${S}${L}${E}`
  : T;

  // 实现 ReplaceAll<S, From, To>，将字符串 From 替换为 To：
type replaced2 = ReplaceAll<'t y ', ' ', 'cpp'> // expected to be 'types'
type ReplaceAll<T extends string, F extends string, L extends string> = 
  T extends `${infer S}${F}${infer B}` 
    ? F extends '' ? `${S}${L}${B}` : ReplaceAll<`${S}${L}${B}`, F, L>
  : T;