import React from 'react'
import { useState } from 'react'
import { CounterLabel } from './CounterLabel.jsx'

export const Counter = ({handleChangeCount}) => {
    const [count, setCount] = useState(0)  

  return (
    // className={count>= 5 ? "" : ""}
    <button style={{backgroundColor: count >= 5 ? "red": "blue"}} onClick={() => setCount(count +1)}>
        {/* handleChangeCount(count + 1),
        setCount(count + 1),
     */}
        <CounterLabel count={count}/>
    </button>
  )
}
