import React from 'react'
import { Element } from 'react-scroll'
import Experincebox from '../ExperinceBox/experincebox'
import './experince.css'

const Experincecontaniner = () => {
    return (
        <Element className='experinceContainer' id='Experience'>
            <h1>
                My Experience</h1><br />
            <h3>Hi have 2+ experince in NON-IT back ground and i was build those project of my 10 months full stack couruse<br />
                and i was mention those project are build my knowledge only.</h3>
            <div className='experinceContainer__info'>
                <Experincebox number="2+" title="Experince" />
                <Experincebox number="30+" title="projects" style={{ backgroundColor: "#f64c08" }} />

            </div>

        </Element>
    )
}

export default Experincecontaniner


