/* eslint-disable @typescript-eslint/no-unused-vars */
/*
 * @Author: Chendapeng
 * @Date: 2021-12-11 15:45:00
 * @LastEditors: Chendapeng
 * @LastEditTime: 2021-12-11 16:03:43
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