import React from 'react'
import Hello from './Components/Hello';
import Any from './Components/Any';
import Homie from './Components/Homie';
import Mapp from './Mapp';
import Eventss from './Components/Eventss';
import Person from './Components/Person';

function App() {
  // statements => if else, for, while, fn 
  let a = 10; 

  return (
    // expressions => map, evaluation, ternary operator 
    <div>
      <h1> {a} </h1>
      {/* <Hello/> */}
      {/* <Any/> */}
      {/* <Homie/> */}
      {/* <Mapp/>  */}
      {/* <Eventss/> */}
      <Person name="sam" color="pink" partner="no" contact="100" /> 
      <Person name="ram" color="red" partner="yes" contact="777" /> 
    
    </div>
  )
}

export default App