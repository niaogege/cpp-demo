/* eslint-disable @typescript-eslint/no-unused-vars */

export interface Test {
  name: string;
  age: number;
  getName: () => void
}

export type FilterByType<T extends any, N extends any> = {
[P in keyof T] : T[P] extends N ? P : never 
}[keyof T];

type KK = keyof Test
const t11: KK = 'name'
export type StringType = FilterByType<Test, string>
export type NameType = Pick<Test, StringType>
export type FunctionTestType =  FilterByType<Test, Function>
export type FunctionGetName = Pick<Test, FunctionTestType>

export interface TestObj {
  name: string;
  hobby: string;
  age: number;
  one: symbol;
}

export type StringType1 = FilterByType<TestObj, String>
export type GetString2 = Pick<TestObj, StringType1>