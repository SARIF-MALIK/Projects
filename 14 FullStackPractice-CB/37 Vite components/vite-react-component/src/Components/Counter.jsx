import React, { useState } from 'react'

function Counter() {
    let [count, setCount] = useState(0); 

    function handleIncrement(){
        setCount(count+1);
    }
    function handleDecrement(){
        setCount(count-1); 
    }
    
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={handleIncrement}>Val++</button>
        <button onClick={handleDecrement}>Val--</button>
    </div>
  )
}

export default Counter