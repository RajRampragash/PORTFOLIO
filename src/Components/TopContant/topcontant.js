import React from 'react'
import { Link } from 'react-scroll'
import './topcontant.css'

const Topcontant = () => {
    return (
        <div className='topcontant'>
            <div className='topcontant__contrainer'>
                <h1>Raj Rampragash</h1>
                <p>A professional web developer</p>
                <a href='https://drive.google.com/file/d/1PSVuNcz2qN3v-HM40PgtS9Aemr1_dfe-/view?usp=sharing' target="_blank" rel="noreferrer">
                    <button className='topcontant__downloadButton'>
                        Download CV
                    </button>
                </a>
                <Link to="projects" smooth={true} duration={500}>
                    <button className='topcontant__workButton'>My work</button>
                </Link>


            </div>

        </div>
    )
}

export default Topcontant
