/* eslint-disable @typescript-eslint/no-unused-vars */
interface IIPerson <T> {
  new (...args: any): T
}
function getInstance(Clazz: IIPerson<T>) {
  return new Clazz()
}

class Decorator {
  getName() {
    return 'cpp'
  }
}

const Person1 = getInstance(Decorator)
Person1.getName()

interface IPerson {
  <T>(a: T): T;
  name: string;
}
const getValue: IPerson = <T>(a: T) => {
  return a
}
getValue<string>('cpp')
getValue<number>(123)

const Test1: IPerson = {
  name: 'cpp'
}
const Test2: IPerson = <T>(a: T): T => {
  return a
}
type CallBack<T> = (item: T) => void;
type CallBack1 = <T>(item: T) => void
const forEach = <T>(arr: T[], callback: CallBack1) => {
  for (let i = 0; i <arr.length - 1; i ++ ) {
    callback(arr[i])
  }
}
forEach([1,'2',3], <T>(i: T) => {
  console.log(i) // (parameter) i: T 推断不出i数据类型
})

const forEach2 = <T>(arr: T[], callback: CallBack<T>) => {
  for (let i = 0; i <arr.length - 1; i ++ ) {
    callback(arr[i])
  }
}
forEach2([1,'2',3], (i) => {
  console.log(i) // (parameter) i: string | number
})

// 定义方法获取传入参数的length属性
function getLength<T extends []>(arg: T) {
  // throw error: arr上不存在length属性
  return arg.length;
}

interface ILength {
  length: number
}

function getLength2<T extends ILength>(arg: T) {
  // throw error: arr上不存在length属性
  return arg.length;
}
getLength2(true) // 类型“boolean”的参数不能赋给类型“ILength”的参数
getLength2({name: 'cpp', length: 1})