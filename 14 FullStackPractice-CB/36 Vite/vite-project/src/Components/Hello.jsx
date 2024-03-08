import React from 'react'

function Hello() {
    let a = false;         // 
    let b = true;          // 
    let c = null;          // 
    let d = undefined;     // this won't be visible even with JSON.stringify(d)
  return (
    <div>
    <div>Hello</div>
    <h1>{JSON.stringify(a)}</h1>
    <h1>{JSON.stringify(b)}</h1>
    <h1>{JSON.stringify(c)}</h1>
    </div>
  )
}

export default Hello