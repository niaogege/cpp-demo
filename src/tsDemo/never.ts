/* eslint-disable @typescript-eslint/no-unused-vars */
/*
 * @Author: Chendapeng
 * @Date: 2021-12-11 18:40:27
 * @LastEditors: Chendapeng
 * @LastEditTime: 2021-12-11 18:51:16
 * @Description: never作用
 * 

never表示不存在的值的类型。我们可以声明一个never类型的变量，但无法给这个变量赋任何类型的值。
既然如此，never的用途是什么呢？它可以用于指定一个永远无法返回的函数的返回类型。
什么函数不会返回值呢？比如：错误处理函数，无限循环函数。

 * 
 */

function error():never{
  throw new Error('错误')
}

function finish():never{
  while(true){
      console.log('事情已经完成了')
  }
}

export interface Foo {
  type: 'foo'
}
interface Bar {
  type: 'bar'
}
interface ABC {
  type: 'abc'
}
type All = Bar | Foo
const test1: All = {
  type: 'bar'
}

function SwitchF(val: All) {
  switch (val.type) {
    case 'bar':
      console.log(11)
      break;
    case 'foo':
      console.log(22)
      break;
      default:
        const exhaust:never = val
        break;
  }  
}
// 注意在 default 里面我们把被收窄为 never 的 val 赋值给一个显式声明为 never 的变量。如果一切逻辑正确，那么这里应该能够编译通过。但是假如后来有一天你的同事改了 All 的类型：

type All2 = Bar | Foo | ABC;
const test2: All2 = {
  type: 'bar'
}

function SwitchF2(val: All2) {
  switch (val.type) {
    case 'bar':
      console.log(11)
      break;
    case 'foo':
      console.log(22)
      break;
    case 'abc':
      console.log(11)
      break;
      default:
        const exhaust:never = val
        break;
  }  
}
// 然而他忘记了在 handleValue 里面加上针对 Baz 的处理逻辑，这个时候在 default branch 里面 val 会被收窄为 Baz，导致无法赋值给 never，产生一个编译错误。所以通过这个办法，你可以确保 handleValue 总是穷尽 (exhaust) 了所有 All 的可能类型。

// 作者：尤雨溪
// 链接：https://www.zhihu.com/question/354601204/answer/888551021
// 来源：知乎
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
