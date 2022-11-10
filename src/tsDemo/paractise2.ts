/* eslint-disable @typescript-eslint/no-unused-vars */
// Flip<{ a: "x", b: "y", c: "z" }>; // {x: 'a', y: 'b', z: 'c'}
// Flip<{ a: 1, b: 2, c: 3 }>; // {1: 'a', 2: 'b', 3: 'c'}
// Flip<{ a: false, b: true }>; // {false: 'a', true: 'b'}

import { A } from "../IOC";

type R10 = Flip<{ a: "x"; b: "y"; c: "z" }>;
type Flip<T extends Record<PropertyKey, any>> = {
  [K in keyof T as `${T[K]}`]: K;
};

type Result1 = Fibonacci<3>; // 2
type Result2 = Fibonacci<8>; // 21

type BuildArr1<
  T extends number,
  E extends unknown = unknown,
  R extends unknown[] = []
> = R["length"] extends T ? R : BuildArr1<T, E, [E, ...R]>;
type R11 = BuildArr1<2>;

type R12 = ADD2<10, 1>;
type ADD2<A extends number, B extends number> = [
  ...BuildArr1<A>,
  ...BuildArr1<B>
]["length"];

type R13 = Minuse<10, 1>; // 9

type Minuse<A extends number, B extends number> = BuildArr1<A> extends [
  ...arr: BuildArr1<B>,
  ...arr2: infer L
]
  ? L["length"]
  : never;

function Fib(n) {
  if (n === 0) return 0;
  if (n <= 2) return 1;
  return Fib(n - 1) + Fib(n - 2);
}

type Fibonacci<
  T extends number,
  N extends number[] = [1],
  Prev extends number[] = [1],
  Cur extends number[] = [1]
> = N["length"] extends T
  ? Prev["length"]
  : Fibonacci<T, [...N, 1], Cur, [...Prev, ...Cur]>;

type Fibonacci2<
  T extends number,
  N extends number[] = [1],
  Prev extends number[] = [1],
  Cur extends number[] = [1]
> = N["length"] extends T
  ? Prev["length"]
  : Fibonacci<T, [...N, 1], Cur, [...Prev, ...Cur]>;

type R22 = Fibonacci2<3>;
