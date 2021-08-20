import React from 'react'






const Profile = (props) => {
    
    return (
        <div>
            <img src={props.children} alt="this is the name" />
            <h1>{props.fullName}</h1>
            <h1>{props.bio} </h1>
            <h1>{props.profession} </h1>
            <button onClick={(e) => handleName(e,props.fullName)} > Click me {props.fullName} </button>
        </div>
    )
}

function handleName(e , parameter) {
    alert(`hi there ${parameter}`)
}

export default Profile
