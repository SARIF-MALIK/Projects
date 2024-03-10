import React, { useState } from 'react'

function Usememo() {
    let [count, setCount] = useState(0); 
    let [inp, setInp] = useState(0); 

    let MyUseMemo = useMemo(function(){
        let ans = 0; 
        for(let i = 0; i<=inp; i++){
            console.log("rendering"); 
            ans = ans + i; 
        }
        return ans; 
    }, [inp]); 

    function handleClick(){
        setCount(count+1); 
    }
    function handleChange(e){
        setInp(e.target.value)
    }
  return (
    <div>
        <input onChange={handleChange} type='text' value={inp} /> 
        <h1> Sum : {MyUseMemo}</h1>
        
    </div>
  )
}

export default Usememo