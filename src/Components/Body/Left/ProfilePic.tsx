import React from 'react'
import profilePic from '../../images/profile.jpg'

export default function ProfilePic() {
    return (
    <span className="profilePic" style={{backgroundImage: `url(${profilePic})`,color:"red"}}>
        </span>
    )
}
