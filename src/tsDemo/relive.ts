/* eslint-disable @typescript-eslint/no-unused-vars */
// MinusOne

import { A } from "../IOC";


type Zero = MinusOne<1> // 0
type FiftyFour = MinusOne<55> // 54

type BuildArr<T extends number, E extends unknown = unknown, A extends unknown[] = []> = 
  A['length'] extends T ? A : BuildArr<T, E, [...A, E]>;
  
type A11 = BuildArr<3>; 

type A22 = ADD<11,22> // type A22 = 33

type ADD<P extends number, T extends number> = [...BuildArr<P>, ...BuildArr<T>]['length']  
type Subtract<T1 extends number, T2 extends number> = 
BuildArr<T1> extends [...arr: BuildArr<T2>, ...arr2: infer R]
  ? R['length']
  : never;
type A33 = Subtract<33,11>

type MinusOne<T extends number> = Subtract<T, 1>


type MinusOne2<T extends number, A extends unknown[] = []> = [...A, '']['length'] extends T
  ? A['length']
  : MinusOne2<T, [...A, '']>
type T33 = MinusOne2<11> // type T33 = 10

type OnlyBoolean = PickByType<
  {
    name: string
    count: number
    isReadonly: boolean
    isEnable: boolean
  },
  boolean
> // { isReadonly: boolean; isEnable: boolean; }

type PickByType<T extends Record<any, {}>, Q extends any> = {
  [P in keyof T as T[P] extends Q ? P : never]: T[P]
}
type a = StartsWith<'abc', 'ab'> // expected to be false

type StartsWith<T extends string, P extends string> =
T extends `${P}${infer R}` ? true : false;

type a1 = EndsWith<'abc', 'bc'> // expected to be true

type EndsWith<T extends string, P extends string> = T extends `${infer F}${infer L}` 
? P extends L ? true : false
: false

type EndsWith1<T extends string, P extends string> = T extends `${string}${P}` ? true : false;
type a2 = EndsWith1<'abc', 'bc'>


interface User {
  name: string
  age: number
  address: string
}

type UserPartialName = PartialByKeys<User, 'age'> // { name?:string; age:number; address:string }

type PartialByKeys<T extends Record<string, any>, K extends unknown = unknown> = {
  [R in keyof T as R extends K ? R : never]?: T[R]
} & Pick<T, keyof Omit<T, K & string>>

type Merge<T> = {
  [K in keyof T]: T[K]
}

type PartialByKeys1<T, K extends PropertyKey = keyof T> = Merge<
  Omit<T, K> & Partial<T>
>


type UserPartialName1 = PartialByKeys1<User, 'age'> 