import React from 'react'

function Mapp() {

    let arr = ["✅", "😭", "💀", "🎂", "🐧", "😘"]
    let arr2 = ['sam', 'vohra', 'maverick', 'kashish']; 
    let r = Math.floor(Math.random()*6); 
  return (
    <div>

    <h1>{arr[r]}</h1>
    {
        arr2.map((item, index)=>{
            return <h1 key={index}>{item}</h1>
        })
    }
    </div>
  )
}

export default Mapp