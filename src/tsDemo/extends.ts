/* eslint-disable @typescript-eslint/no-unused-vars */
type res = 1 extends 2 ? true: false
type GetType1<T extends unknown[]> = T extends [infer F, ...infer R] ? F : never;

type T1 = GetType1<[any, string, unknown]>

type MapType<T> = {
  [P in keyof T]: [
    T[P],  T[P], 
  ]
}
type T2 = MapType<{a: 1, b: 2}>
const t2: T2 = {
  a: [1, 1],
  b: [2, 2]
}