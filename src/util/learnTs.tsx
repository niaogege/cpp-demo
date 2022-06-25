/*
 * @Author: Chendapeng
 * @Date: 2021-06-24 20:44:43
 * @LastEditors: Chendapeng
 * @LastEditTime: 2021-06-25 19:33:58
 * @Description: 
 */
import { useState } from 'react'
export function useArray1 <T>(initialArrty: T[]) {
  const [value, setValue] = useState(initialArrty)
  return {
    value,
    setValue,
    add: (item: T) => setValue([...value, item]),
    clear: () => setValue([]),
    removeIndex: (index: number) => {
      const copy = [...value];
      copy.splice(index, 1);
      setValue(copy);
    }
  }
}

