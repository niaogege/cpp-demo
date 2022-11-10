/* eslint-disable @typescript-eslint/no-unused-vars */
/*
 * @Author: Chendapeng
 * @Date: 2021-12-11 18:12:49
 * @LastEditors: Chendapeng
 * @LastEditTime: 2022-07-06 18:11:32
 * @Description: Ts类型过滤
 */
export interface TestObj {
  name: string;
  hobby: string;
  age: number;
  one: symbol;
}
type Keys = keyof TestObj;

type FilterConditionType<Source, Condition> = Pick<Source, 
{
  [K in keyof Source]: Source[K] extends Condition ? K : never
}[keyof Source]
>

type KeyString = keyof string;
type TestFilter = FilterConditionType<TestObj, string>
type testPick = Pick<TestObj, 'hobby' | 'name'>

type UnWantType<T, C> = {
  [K in keyof T]: T[K] extends C ? K : never
}
type TestUnWantType = UnWantType<TestObj, string>
// 等价于
type TestObj1 = {
  name: 'name';
  hobby: 'hobby';
  age: never;
  one: never;
}
function isNot(): never {
  throw new Error('eeee')
  }
// const instace: TestUnWantType = {
//   name: 'name', 
//   hobby: 'hobby', 
// }
type TypeName = {
  name: 'name'
}['name']
// 等价于
type TypeName1 = 'name'

type UnionType1 = {
  age: number;
  name: string;
}['age' | 'name']
// 等价于
type MockUninoTyp1 = number | string;

// 值为 never 的 key 值是无法被访问到的：
type UnionType2 = {
  age: number;
  name: never;
}['age' | 'name']
type UnionType3 = number

type MarkWantType<T, C> = {
  [K in keyof T]: T[K] extends C ? K : never
}[keyof T]
const TestInstance: MarkWantType<TestObj, string> = 'name'
const EndTest: FilterConditionType<TestObj, string> = {
  name: '111',
  hobby: '111'
}

type ComponentType<P = {}> = any

export type ElementType<P = any> =
{
  [K in keyof JSX.IntrinsicElements]: P extends JSX.IntrinsicElements[K] ? K : never
}[keyof JSX.IntrinsicElements] |
ComponentType<P>;

export interface TestObj {
  name: string;
  hobby: string;
  age: number;
  one: symbol;
  kind: object;
}
type T1 = Omit<TestObj, 'kind'>
type FilterByType<T, Y> = {
  [P in keyof T]: T[P] extends Y ? P : never
}[keyof T]
type T2 = FilterByType<TestObj, string>
type T3 = Pick<TestObj, T2>

type FilterByTypeName<T, Y> = {
  [P in keyof T]: P extends Y ? P : never
}[keyof T]
type T4 = FilterByTypeName<TestObj, 'kind'>
type T6 = Pick<TestObj, 'kind'>
type T5 = FilterBB<TestObj, string>
// type T5 = {
//   name: string;
//   hobby: string;
// }
type FilterBB<T, Y> = {
  [P in keyof T as T[P] extends Y ? P : never]: T[P]
}