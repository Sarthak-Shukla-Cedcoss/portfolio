import React from 'react'
import data from '../../data/data.json'
export default function Project() {
    return (
        <div>
            <h1>
                Projects
            </h1>
            <p>{data.projects.summary}</p>
            <dl>
                {
                    data.projects.projects.map((ProjectsData: { name: string, description: string }) => {
                        console.log(ProjectsData)
                        return (<>
                            <dt><strong>{ProjectsData.name} :</strong></dt>
                            <dd>{ProjectsData.description}</dd>
                            <br/>
                        </>
                        )
                    })
                }
            </dl>

        </div>
    )
}
