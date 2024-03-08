import React from 'react'

function Eventss() {

  function handleClick(a ) {
    console.log("hello", a); 
  }

  return (
    <div>
    {/* <button onClick={handleClick()}>Click me! ❌❌❌❌</button> */}
    {/* <button onClick={handleClick}>Click me! </button> */}
    <button onClick={()=> handleClick(101)}>Click me! </button>
    </div>
  )
}

export default Eventss