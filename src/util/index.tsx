/*
 * @Author: Chendapeng
 * @Date: 2021-06-20 13:13:36
 * @LastEditors: Chendapeng
 * @LastEditTime: 2021-06-20 13:25:08
 * @Description: 
 */
export const isFalsy = (value: unknown) => (value === 0 ? false : !value);

export const isVoid = (value: unknown) =>
  value === undefined || value === null || value === "";

// let a: object
// a = {name: 'jack'}
// a = () => {
// }
// a = new RegExp('')
//
// let b: { [key: string]: unknown }
// b = {name: 'Jack'}
// b = () => {}
// 在一个函数里，改变传入的对象本身是不好的
export const cleanObject = (object?: any) => {
  // Object.assign({}, object)
  if (!object) {
    return {};
  }
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    const value = result[key];
    if (isVoid(value)) {
      delete result[key];
    }
  });
  return result;
};