/* eslint-disable @typescript-eslint/no-unused-vars */
/*
 * @Author: Chendapeng
 * @Date: 2021-07-29 13:43:01
 * @LastEditors: Chendapeng
 * @LastEditTime: 2022-06-04 22:21:01
 * @Description: 
 */
/**
 * infer涉及的内置高级类型有4个
 * ReturnType
 * ParameterType
 * InstanceType
 * ConstructorParameters
 */
interface Member {
  name: string;
  age: number;
  hobby: [];
}
const changeName = <K extends keyof Member>(obj: Member, name: K): Member[K] => {
  return obj[name]
}

changeName({name: 'chendap', age: 30, hobby: []}, 'name')
type TestR = ReturnType<typeof changeName> //  返回联合字面量类型 type TestR = string | number 
type TestP = Parameters<typeof changeName> //  返回元祖类型 type TestP = [obj: Member, name: keyof Member]
type TestP0 = TestP[0]
type TestP1 = TestP[1]
const Instance: TestP1 = 'hobby'


// 现在看看如何模拟ReturnType/Paramters
type MockReturnType<T extends any> = T extends (...args: any) => infer R ? R : any; 
type TestMockR = MockReturnType<typeof changeName>;
// 等价于
type TestMockR2 = string | number | []
// 实际运用
const instanceMockR: TestMockR2 = '111'
/**
 * 1.范型部分的 函数类型表示(...args: any) => any
 * 2.正文中的函数类型表示 (...args: any) => any
 * 3.infer 后面带出一个新的类型
 */
type MockParameters<T extends any> = T extends (...args: infer P) => any ? P : never; 
type TestMockP = MockParameters<typeof changeName>
// 等价于
// type TestMockP = [obj: Member, name: keyof Member]
// 实际运用
export const instanceMockP: TestMockP = [{name: 'chendap', age: 30, hobby: []}, 'age']
/**
 * 1.范型部分跟ReturnType一样
 * 2.最难理解的是正文的推断部分
 * 3.(...args: infer P) => any ? P : never
 */

class Cpp {
  private name
  private age
  constructor({name, age}: Member) {
    this.name = name
    this.age = age
  }
  getName() {
    return this.name
  }
}
const ClassCppInstance = new Cpp({
  name: 'chendap', age: 30, hobby: []
})
export type TTestClassCpp = InstanceType<typeof Cpp>
type MockAge = TTestClassCpp['age'] // type MockAge = number
type MockGetName = TTestClassCpp['getName'] // type MockGetName = () => string
type MockName = TTestClassCpp['name'] // 等价于 type MockName = string
// 现在看看如何实现一个InstanceType

type MockIntanceType<T extends abstract new (...args: any) => any> = T extends abstract new (...args: any) => infer R ? R : any;

type MockReturnType2<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any; 

type MockInstanceTType<T extends abstract new (...args: any) => any> = T extends abstract new (...args: any) => infer R ? R : any; 

type MockTestCpp = MockIntanceType<typeof Cpp>
type MockAge2 = MockTestCpp['age'] // type MockAge = number
type MockGetName2 = MockTestCpp['getName'] // type MockGetName = () => string


type TConstructor = ConstructorParameters<typeof Cpp> // type TConstructor = [Member]

// 看看如何实现一个ConstructorParameters
type MockConstructorParameters<T extends abstract new (...ars: any) => any> = T extends abstract new (...args: infer P) => any ? P : never;

type MockParametersType<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never; 
// 等价于 type TestConstructorParameter = [Member]
type TestConstructorParameter = MockConstructorParameters<typeof Cpp>
//  实际运用
const TestInstanceP: TestConstructorParameter = [{name: 'chendap', age: 30, hobby: []}]

/**
 * infer 主要用于类型提取
 */
interface UserCpp extends Member {
  hobbys: string
}

type UserPromise = Promise<UserCpp>
type GetPromiseData = Promise<UserCpp>
// 这个类型表示一个返回值类型为 User的 Promise类型。我们想把 User这个类型从这个已知的函数中提取出来，应当使用 infer关键字
type UnPromisify<T> = T extends Promise<infer V> ? V : never;

type InferPromiseData<T> = T extends Promise<infer S> ? S : never; 
type InferUser = UnPromisify<UserPromise>
type GetPromiseDataType = InferPromiseData<GetPromiseData>
export const testUser: InferUser = {
  name: '11',
  age: 30,
  hobbys: 'shufa',
  hobby: []
}

/**
 - [看懂复杂的 TypeScript 泛型运算](https://mp.weixin.qq.com/s/axfKKGHfxy3gZbKYEFjnkQ)
 */

const array: string[] = ['1', '2' , '3' , '4']
// infer 提取类型数据类型
export type ExtractType = typeof array extends (infer U)[] ? U : never;

const test11 = [2,3,4,5]
export type GetTest11Type = typeof test11 extends (infer U)[] ? U : never