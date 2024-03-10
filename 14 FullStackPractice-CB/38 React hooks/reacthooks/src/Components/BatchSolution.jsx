import React from 'react'

function BatchSolution() {
    const [count, setCount] = useState(0)

    function handleClick(){
      console.log('')
      setCount((currCount)=>currCount+1); 
      setCount((currCount)=>currCount+1); 
      setCount((currCount)=>currCount+1); 
       // not sync task therefore DOM updated at the end called batching concept 
    }
  return (
    <div>
    <button onClick={handleClick}>Counter={count}</button>
  </div>
  )
}

export default BatchSolution