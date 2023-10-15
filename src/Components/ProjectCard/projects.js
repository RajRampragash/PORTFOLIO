import React, { useState } from 'react'
import './projects.css'

const ProjectCard = ({ img, title, desc, url }) => {
    const [show, setshow] = useState(false)
    return (
        <a href={url} target="_blank" rel="noreferrer">
            <div className='project' onMouseEnter={() => setshow(true)} onMouseLeave={() => setshow(false)}>
                {
                    show ? (
                        <div className='project__contant'>
                            <h4>{title}</h4>
                            <p>{desc}</p>
                        </div>
                    ) : (
                        <img src={img} alt="" />

                    )

                }
            </div>
        </a>

    )
}

export default ProjectCard
