/* eslint-disable @typescript-eslint/no-unused-vars */
function invokeAny(cb: any) {
  cb() 
}
invokeAny(1) // 运行时会报错 TypeError: cb is not a function

function invokeAnything(cb: unknown) {
  cb() // 类型错误: 对象的类型为 "unknown"
  if (typeof cb === 'function') {
    cb()
  }
}
invokeAnything(2);

export default {}


let a: any = '11'
let b: unknown = '22'
let c: string = a;
let d: string = b; // 不能将类型“unknown”分配给类型“string”