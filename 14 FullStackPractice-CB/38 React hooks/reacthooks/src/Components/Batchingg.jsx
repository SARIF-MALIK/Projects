import React from 'react'

function Batchingg() {
    const [count, setCount] = useState(0)

    function handleClick(){
      console.log('')
      setCount(count+1); 
      setCount(count+1); 
      setCount(count+1);       // not sync task therefore DOM updated at the end called batching concept 
    }
  return (
    <div>
    <button onClick={handleClick}>Counter={count}</button>
  </div>
  )
}

export default Batchingg