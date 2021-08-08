import React from 'react'






const Profile = (props) => {
    
    return (
        <div>
            <img src={props.children} alt="this is the name" />
            <h1>{props.fullName}</h1>
            <h1>{props.bio} </h1>
            <h1>{props.profession} </h1>
            <button onClick={alet} > Click me {props.fullName} </button>
        </div>
    )
}

const alet = props => {
    alert(`hi there ${props.fullName}`)
}

export default Profile
