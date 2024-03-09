import React, { Fragment, useState } from 'react'

function Todos() {
    let [titl, setTitl] = useState("study"); 
    function handleChange(){ 
        setTitl(Math.floor(Math.random()*10)); 
    }
  return (
    <Fragment>
        <DisplayTodo title={titl} desc="study react acche se"/> 
        <button onClick={handleChange}>update Desc</button>
        <DisplayTodo title="play" desc="play badminton acche se"/> 
        <DisplayTodo title="gym" desc="do gym acche se"/> 
    </Fragment>
  )
}

function DisplayTodo(props){

    return(
        <Fragment>
            <h1>Title: {props.title}</h1>
            <h3>Description: {props.desc}</h3>
        </Fragment>
    )
}

export default Todos