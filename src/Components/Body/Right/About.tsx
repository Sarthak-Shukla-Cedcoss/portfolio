import React from 'react'
import data from '../../data/data.json'
export default function About() {
    return (
        <div>
            <h1>
                About
            </h1>
            <p>{data.about}</p>
        </div>
    )
}
