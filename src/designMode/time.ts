class Person {
  @time
  say() {
    console.log('hello')
  }
}
const person1 = new Person()
person1.say()


function time(target: any, name: string, descriptor: any) {
  const func = descriptor.value
  if (typeof descriptor === 'function') {
    descriptor.value = function(...arg: []) {
      console.time()
      const res = func.apply(this, arg)
      console.timeEnd()
      return res
    }
  }
}