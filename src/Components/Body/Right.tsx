import React from 'react'
import About from './Right/About'
import Contact from './Right/Contact'
import Project from './Right/Project'
import Skill from './Right/Skill'
import data from '../data/data.json'

export default function Right() {
    return (
        <div className="right">
            <About />
            <Skill />
            <Project />
            <Contact />
        </div>
    )
}
