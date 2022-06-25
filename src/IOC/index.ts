export {}

class B {
  p: number
  constructor(p: number) {
    this.p = p
  }
}
export class A {
  b: B;
  constructor(b: B) {
    this.b = b
  }
}

const b = new B(10)
const a = new A(b)
console.log(a)

// export class Container {
//   bindMap = new Map()
//   bind(identifier: string, clazz: any, constructorArg?: any[]) {
//     this.bindMap.set(identifier, {
//       clazz,
//       constructorArg
//     })
//   }
//   get<T>(identifier: string): T {
//     const target = this.bindMap.get(identifier)
//     const {
//       clazz,
//       constructorArg
//     } = target;
//     const instance = Reflect.construct(clazz, constructorArg)
//     return instance
//   }
// }

// const container = new Container()
// class A1 {
//   b: B;
//   constructor(){
//     this.b = container.get('a')
//   }
// }
// class B1 {
//   p: number
//   constructor(p: number) {
//     this.p = p
//     console.log('111');
//   }
// }
// container.bind('a', A1)
// container.bind('b', B1, [10])

// const aa = container.get('a')
// console.log(aa, 'aa')

const Key = 'Ioc:key'
export function ClassDecorator() {
  return function (target: any) {
    Reflect.set(target, Key, {
      metaData: 'Cpp'
    })
    return target
  }
}
@ClassDecorator()
class D {
  constructor() {
    console.log('this is ClassDecorator D');
  }
}

var last = Reflect.get(D, Key)
export default last