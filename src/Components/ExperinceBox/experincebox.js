import React from 'react'
import './experincebox.css'

const Experincebox = ({ number, title, style }) => {
    return (
        <div style={{ ...style }} className='experincebox'>
            <h1>{number}</h1>
            <p>{title}</p>
        </div>
    )
}

export default Experincebox
