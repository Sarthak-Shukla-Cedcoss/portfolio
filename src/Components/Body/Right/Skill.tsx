import React, { useState } from 'react'
import data from '../../data/data.json'
export default function Skill() {
    const [skilSet] = useState<Array<string>>(data.skills?.skillset.split(','))
    const skillSummary: string = data.skills?.summary
    return (
        <div>
            <h1>
                Skills
            </h1>
            <p>{skillSummary}</p>
            <ul>
                {skilSet.map((MapSkil: string) => {
                    return (
                        <li>{MapSkil}</li>
                    )
                })}
            </ul>
        </div>
    )
}
