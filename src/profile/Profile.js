import React from 'react'






const Profile = (props) => {
    return (
        <div>
            <img src={props.children} alt="this is the name" />
            <h1>{props.fullName}</h1>
            <h1>{props.bio} </h1>
            <h1>{props.profession} </h1>
        </div>
    )
}

export default Profile
