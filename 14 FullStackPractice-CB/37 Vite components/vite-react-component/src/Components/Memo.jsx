import React, { Fragment, useState, memo } from 'react'

function Memo() {
    let [task, setTask] = useState("read")
    function handleClick(){
        setTask(Math.floor(Math.random()*10)); 
    }
  return (
    <div>
        <h5>Memo technique</h5>
        <Tod titl={task} desc="read astrology"/>
        <button onClick={handleClick}>click</button>
        <Tod titl="play" desc="play football"/>
        <Tod titl="watch" desc="watch your watch"/>
    </div>
  )
}

// memoization 

const Tod = memo(function Tod(props){
    return(
        <Fragment>
            <h1>Title: {props.titl}</h1>
            <h1>Desc: {props.desc} </h1>
        </Fragment>
    )
})

// function Tod(props){
//     return(
//         <Fragment>
//             <h1>Title: {props.titl}</h1>
//             <h1>Desc: {props.desc} </h1>
//         </Fragment>
//     )
// }

export default Memo