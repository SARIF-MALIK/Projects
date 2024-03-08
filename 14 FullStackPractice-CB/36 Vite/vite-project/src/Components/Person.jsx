import React from 'react'

function Person(props) {
  return (
    <div>
        <h2>my name is {props.name}</h2>
        <h2>my favourite color is {props.color}</h2>
        <h2>my life partner is {props.partner}</h2>
        <h2>my contact number is {props.contact}</h2>
    </div>
  )
}

export default Person