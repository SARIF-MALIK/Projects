import React, { useState } from 'react'

function Person(props) {

    let [username, setUsername] = useState(props.name); 

    let [age, setAge] = useState(props.age)

    function handleLogout(){

    }
    
    return (
        <div>
            <h1>
                Person {username}
            </h1>
            <h1>
                and  age {age}
            </h1>

            <button onClick={handleLogout}> Logout</button>

        </div>
    )
}

export default Person; 
