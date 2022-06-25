/*
 * @Author: Chendapeng
 * @Date: 2021-11-28 17:51:46
 * @LastEditors: Chendapeng
 * @LastEditTime: 2021-11-28 18:10:16
 * @Description: 
 */
import React from "react";
interface CounterProp {
  value: number;
  decrement: () => void;
  increment: () => void;
}
const Counter: React.FC<CounterProp> = ({
  value,
  decrement,
  increment
}) => {
  return (<div>
    <h1>
      this is Test redux {value}
    </h1>
    <div>
      <button onClick={increment}>++</button>
      <button onClick={decrement}>--</button>
    </div>
  </div>)
}

export default Counter