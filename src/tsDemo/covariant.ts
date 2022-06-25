/* eslint-disable @typescript-eslint/no-unused-vars */
interface User {
  id: number;
  name: string;
}
interface CPP {
  id: number;
  name: string;
  hobby: string
}

let cppF: (cpp: CPP) => void;

cppF = (cpp) => {
  console.log(cpp.hobby)
}

let personF: (person: User) => void;

personF = (person) => {
  console.log(person.name)
}
// 子不能赋值给父类型
personF = cppF; // 类型 "User" 中缺少属性 "hobby"，但类型 "CPP" 中需要该属性。
cppF = personF;

type Func = (a: string) => void;

const func: Func = (a: 'hello') => undefined