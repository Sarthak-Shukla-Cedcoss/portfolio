import React from 'react'
import ProfilePic from './Left/ProfilePic'
import data from '../data/data.json'
export default function Left() {
    return (
        <div className='left'>
            <ProfilePic />
            <br />
            <span>{data.name}</span>
            <div>
                <strong>Top Skills *</strong>
                <div className="flexlayout">
                    {data.skills.topskill.map((TopSkil: string) => {
                        return <span className="badge">{TopSkil}</span>
                    })}
                </div>
            </div>

        </div>
    )
}
