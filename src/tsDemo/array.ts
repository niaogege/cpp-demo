/* eslint-disable @typescript-eslint/no-unused-vars */
type N1 = [unknown]['length']
type N2 = [unknown, unknown, unknown]['length']

type BuildArr<
  L extends number,
  E = unknown,
  Result extends unknown[] = []
> = Result['length'] extends L
 ? Result
 : BuildArr<L, E, [...Result, E]>

 type N3 = BuildArr<3, {name: 'cpp'}>

 type N4 = Add<32, 20> // 52
 type Add<A extends number, B extends number> = 
 [...BuildArr<A>, ...BuildArr<B>]['length']

 type N5 = Min<32, 20>
 type Min<A extends number, B extends number> =
  BuildArr<A> extends [
    ...arr1: BuildArr<B>, ...arr2: infer Rest
  ] ? Rest['length'] : never

  type N6 = Multipe<5, 6> // 30
  type Multipe<A extends number, B extends number, R extends unknown[] = []> = 
    B extends 0 
    ? R['length']
    : Multipe<A, Min<B, 1>, [...BuildArr<A>, ...R]>
  // A * B = R['length']

  type N7 = Divide<30, 5> // 6
  type Divide<A extends number, B extends number, R extends unknown[] = []> = 
   A extends 0
    ? R['length']
    : Divide<Min<A, B>, B, [unknown,...R]>