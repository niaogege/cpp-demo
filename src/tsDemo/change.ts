/*
 * @Author: Chendapeng
 * @Date: 2021-07-28 11:21:24
 * @LastEditors: Chendapeng
 * @LastEditTime: 2021-08-01 16:54:52
 * @Description:  协变和逆变
 */
// A <= B A是B的子类型 协变
export interface Animal {
  name: string | undefined
}
interface Dog extends Animal {
  eat(): void | undefined
}
var animal: Animal = {
  name: '111'
}
var dog: Dog = {
  name: '222',
  eat: () => {}

}
// 父类型 = 子类型 子类型更具体 
animal = dog

// var animals: Animal[];
// var dogs: Dog[];
// animals = dogs;


let getAnimal = (): Animal => {
  return animal
}
let getDog = (): Dog => {
  return dog
}
getAnimal = getDog // 协变
// getDog = getAnimal // 逆变

let feedAnimal = (o: Animal) => {}
let feedDog = (o: Dog) => {
  o.eat()
}
// feedDog = feedAnimal; // feedAnimal <= feedDog // 逆变
// feedAnimal = feedDog

interface Action {
  type: string
}

declare function dispatch<T extends Action>(action: T): void;
