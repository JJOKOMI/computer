import React, { useState } from 'react'

export default function ReactExample() {
  
  const [count, setCount] = useState<number>(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={increment}>증가</button> 
      <button onClick={decrement}>감소</button>
    </div>
  )
}
