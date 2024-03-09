import React, { Fragment, useState} from 'react'

function Home() {
  return (

    <div>
        <Display titl="gym" desc="go to gym" />
        <BadaDisplay titl="shop" desc="go to shop" />
    </div>
  )
}

function Display(props){
    return (
        <Fragment>
        <h1>Title: {props.titl} </h1>
        <h3>Desc: {props.desc}</h3>
        </Fragment>
        )
}

function BadaDisplay({titl, desc}){
    let [newtitle, setNewTitle] = useState(titl); 

    function handleClick(){
        setNewTitle(Math.floor(Math.random()*10))
    }
    return(
        <Fragment>
            <Display titl={newtitle} desc={desc}/>
            <button onClick={handleClick}>click</button>
        </Fragment>
    )
}

export default Home