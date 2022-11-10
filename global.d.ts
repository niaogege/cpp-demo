import * as fs from 'fs'

declare global {
  declare function funcNum1(a: number, b: number): number;
  declare const ttname: fs.Dir
}

export declare namespace CPPModule {
  export function readName(name: string): string;
}

declare module 'cpp:node' {
  global {
    declare function moduleName(name: string): string;
  }
}