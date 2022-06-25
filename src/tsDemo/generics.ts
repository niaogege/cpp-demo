/* eslint-disable @typescript-eslint/no-unused-vars */
export default {}

interface SayName {
  (name: string): string
}

export const t1: SayName = (name: string) => {
  return name
}

interface IPerson {
  [prop: string]: any;
}
export class Person implements IPerson {
  name = '11'
  age = 30;
  getName: () => void;
}

var p1 = new Person()

export interface PersonConstructor {
  new (name: string, age: number): IPerson
}
export function createPerson(ctro: PersonConstructor): IPerson {
  return new ctro('cpp', 30)
}

type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}


type T1 = MyPick<IPerson, 'name'>
type T2 = Pick<IPerson, 'name'>

type MyRequired<T> = {
  [P in keyof T]-?: T[P]
}


const test1:T2 = {
  name: 'cc'
}

type MyPartical<T> = {
  [K in keyof T]?: T[K]
}

type MyRead<T> = {
  readonly [P in keyof T]: T[P]
}
type T3 = MyPartical<IPerson>
type T4 = MyRequired<IPerson>
const t2: T4 = {
  name: '11',
  age: 222
}
type T5 = MyRead<IPerson>


type T6 = Record<'hobby', T4>
const t6: T6 = {
  hobby: {
    name: '111',
    age: 31
  }
}
type MyRecord<K extends string | number | symbol, T> = {
  [P in K]: T
}
type T7 = MyRecord<'fly', T4>
const t7: T7 = {
  fly: {
    name: '',
    age: 31
  }
}

interface IPerson {
  name: string;
  age: number;
}

type FilterStringType<T> = {
  [P in keyof T as T[P] extends string ? P : never ]: T[P]
}
type T8 = FilterStringType<IPerson>

export interface Test {
  name: string;
  age: number;
  getName: () => void
}
export type FilterByType<T extends any, N extends any> = {
  [P in keyof T] : T[P] extends N ? P : never 
  }[keyof T];
export type StringType = FilterByType<Test, string>
export type NameType = Pick<Test, StringType>

type T9 = FilterStringType<Test>

type FilterStringTypeA<T, A extends string> = {
  [P in keyof T as P extends A ? P : never ]: T[P]
}
type T10 = FilterStringTypeA<Test, 'age'>

type Getters<T extends Record<any, any>> = {
  [K in keyof T as `get${Capitalize<K & string>}`]: T[K]
}

type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1]

type First<T extends unknown[]> = T extends [infer F, ...infer P] ? F : never
type head1 = First<arr1> // expected to be 'a'
type head2 = First<arr2> // expected to be 3