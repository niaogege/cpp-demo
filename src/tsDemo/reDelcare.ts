import { type } from "os"

/*
 * @Author: Chendapeng
 * @Date: 2021-08-08 20:23:01
 * @LastEditors: Chendapeng
 * @LastEditTime: 2021-11-09 21:36:34
 * @Description: 
 */
export interface Book {
  name?: string;
  author?: string;
  price: number
}
export type ReadonlyBook = Readonly<Book>
export type MustHaveAuthor = Required<Pick<Book, 'author'>> & Omit<Book, 'author'>
export const MustBookIns: MustHaveAuthor = {
  price: 11,
  name: 'cpp',
  author: 'cpp'
}

type Per = {
  name1: string;
}
type PerSec = {
  name: string;
  age: number;
  hobby: string;
}
export type MockReadonly<T> = {
  readonly [P in keyof T]: T[P]
} 
export type MockPick<T, K extends keyof T> = {
  [P in K]: T[P]
}

export type MockPartial2<T> = {
  [P in keyof T]?: T[P]
}
export type MockPick2<T, K extends keyof T> = {
  [P in K]: T[P]
}
export type MockOmit<T, K extends string | number | symbol > = {
  [P in Exclude<keyof T, K>]: T[P]
}
export type MockExclude<T, U> = T extends U ? never : T;
export type MockExtract<T, U> = T extends U ? T : never

export type NewPer = MockExclude<keyof PerSec, keyof Per>
export type NewOmit = MockOmit<PerSec, 'age' | 'name'>
export type NewPerS = MockExtract<keyof PerSec, keyof Per>

export type NewPickP = MockPick<PerSec, 'hobby'>
export type MockPartial<T> = {
  [P in keyof T]?: T[P]
}
export type NewPartial = MockPartial<PerSec>



const addNumber = (a: number, b: number) => a + b;
const processRes = (res: number) => console.log(res);
processRes(addNumber(10, 20))

const ProcessRes = (res: ReturnType<typeof addNumber>) => console.log(res) 
ProcessRes(addNumber(10, 20))

const array: string[] = ['1', '2' , '3' , '4']

// infer 提取类型
type XType2 = typeof array extends (infer U)[] ? U : never;

export const TestO: XType2 = '111'

const onSubmit = (callback: Function) => callback(1,23)
// Preferred, the arguments and return type of callback is now clear
const onSubmitType = (callback: () => Promise<unknown>) => callback()

interface Http<T, V> {
  data: T;
  res?: V;
}
type StringHttp = Http<string, never>
const fails: StringHttp = {
  data: '111',
  // res: {}
}