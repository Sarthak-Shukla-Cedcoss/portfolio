import React from 'react'
import profilePic from '../../images/profile.png'

export default function ProfilePic() {
    return (
    <span className="profilePic" style={{backgroundImage: `url(${profilePic})`}}>
        </span>
    )
}
