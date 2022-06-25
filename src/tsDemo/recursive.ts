import { type } from "os";
import { A } from "../IOC";

/* eslint-disable @typescript-eslint/no-unused-vars */
export type GetPromise<T> = T extends Promise<infer A>
  ? GetPromise<A>
  : T;

type TP1 = GetPromise<Promise<Promise<[12,34]>>>

type Tp2 = Includes<[1,2,3,4], 5>
// 数组解构 用extends 
type Includes<T extends unknown[], A> = 
  T extends [infer F, ...infer R] 
  ? Equal<F, A> extends true 
    ? true 
    : Includes<R, A>
  : false
;
type Equal<A, B> = (A extends B ? true : false) & (B extends A ? true : false)
type TP3 = Equal<1,1>


type RemoveItem<T extends unknown[], A extends T[number], L extends unknown[] = []> = 
  T extends [infer F, ...infer R]
   ? Equal<F, A> extends true
       ? RemoveItem<R, A, L>
       : RemoveItem<R, A, [...L, F]>
   : L
type Tp4 = RemoveItem<[1,2,3,4], 4> // [1,2,3]

type BuildArr<L extends number, 
E = unknown, 
A extends unknown[] = []> = 
  A['length'] extends L 
  ? A
  : BuildArr<L, E, [...A, E]> 
type TP5 = BuildArr<4> // type TP5 = [unknown, unknown, unknown, unknown]

type ReturnType1<T extends (...arg: any) => void> = 
  T extends (...arg: any) => infer R ? R : any;

function SayName(name: string): string | number {
  return name
}
type Tp6 = ReturnType1<typeof SayName>
type Tp7 = ReturnType<typeof SayName>

type ParametersT<T extends (...args: any) => any> = 
  T extends (...arg: infer P) => any ? P : never;
type Tp8 = ParametersT<typeof SayName>

type ReplaceAll<
  S extends string,
  F extends string,
  T extends string
> = S extends `${infer L}${F}${infer R}`
 ? `${L}${T}${ReplaceAll<R, F, T>}`
 : S

type Tp9 = ReplaceAll<'This is cpp', 'is', 'wmh'>
// type Tp9 = "Thwmh wmh cpp"

// StringToUnion 'cpp' => 'c' | 'p' 
type Tp10 = StringToUnion<'cpp1'>
type StringToUnion<T extends string> =
 T extends `${infer F}${infer R}`
  ? F | StringToUnion<R>
  : never;

  // ReverseStr 'cpp' => 'ppc' empty 构造出来的
type ReverseStr<T extends string, E extends string = ''> =
 T extends `${infer F}${infer R}`
  ? `${ReverseStr<R, E>}${F}`
  : `${E}`

type TP11 = ReverseStr<'hello'>


// Include
type TP12 = Include<[1,2,3], 2> // true

type Include<T extends unknown[], N extends unknown> = 
  T extends [infer F, ...infer R] 
  ? Equal<F, N> extends true 
    ? true
    : Include<R, N>
  : T;