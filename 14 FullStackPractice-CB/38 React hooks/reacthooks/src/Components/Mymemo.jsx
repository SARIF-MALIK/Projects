import {React, useState, memo, useEffect} from 'react'

function Mymemo() {
    let [inp, setInp] = useState("html"); 
    function handleProp() {
        setInp(Math.floor(Math.random()*10))
    }
  return (
    <div>
        <MeraMemo titl={inp}/>
        <button onClick={handleProp}>badal do dunia</button>
        <MeraMemo titl="react"/>
        <MeraMemo titl="backend"/>
    </div>
  )
}

const MeraMemo = memo(function (props){  
return(    
<Fragment>      
<h1>Title: {props.titl}</h1>      
</Fragment>  
)})  

// function MeraMemo({titl}){
//     return (
//         <div>
//             <h1>Title: {titl}</h1>
//         </div>
//     ); 
// }

export default Mymemo; 