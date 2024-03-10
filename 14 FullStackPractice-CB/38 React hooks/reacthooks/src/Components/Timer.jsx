import React, { useEffect, useState } from 'react'

function Timer() {
    let [val, setVal] = useState(0); 
    
    useEffect(()=>{

        // let id = setInterval(() => {
        //     setVal(val+1); 
        // }, 1000);

        // return ()=>{
        //     clearInterval(id)           //  clean up function 
        // }

        setTimeout(()=>{
            setVal(val+1); 
        }, 1000) 
    },
     [val])


     
  return (
    <div>

        <h1>Time : {val}</h1>
    </div>
  )
}

export default Timer