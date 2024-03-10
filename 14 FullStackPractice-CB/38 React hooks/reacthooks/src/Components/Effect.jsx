import  { React, useEffect, useState } from 'react'
import axios from "axios"

function Effect() {
    let [data, setData] = useState(""); 


    useEffect(()=>{
        axios.get("https://api.tvmaze.com/search/shows?q=girls")
        .then(async(res)=>{
            console.log(res, "sam"); 
            setData(res);  
        })
    }, []); 
  return (
    <div>Effect api - {JSON.stringify(data)}</div>
  )
}

export default Effect