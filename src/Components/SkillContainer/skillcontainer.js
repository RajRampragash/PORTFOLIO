import React from 'react'
import { Element } from 'react-scroll'
import './skillcontainer.css'
import skills from '../../Components/Assects/skills.jpeg'
import LinearProgress from '@mui/material/LinearProgress';

const skillcontainer = () => {
    return (
        <Element className="skillcontainer" id="skills">
            <div className='skillcontainer__image'>
                <img src={skills} alt='' />
            </div>
            <div className='skillcontainer__text'>
                <h1> Skills </h1>
                <div className='skillcontainer__skillset'>
                    <h3>React</h3>
                </div>
                <div className='skillcontainer__slider skillcontainer__slider1'>
                    <LinearProgress variant="determinate" value={90} />
                </div>
                <div className='skillcontainer__skillset'>
                    <h3>HTML</h3>
                </div>
                <div className='skillcontainer__slider skillcontainer__slider1'>
                    <LinearProgress variant="determinate" value={90} />
                </div>
                <div className='skillcontainer__skillset'>
                    <h3>CSS</h3>
                </div>
                <div className='skillcontainer__slider skillcontainer__slider2'>
                    <LinearProgress variant="determinate" value={90} />
                </div>
                <div className='skillcontainer__skillset'>
                    <h3>Java script</h3>
                </div>
                <div className='skillcontainer__slider skillcontainer__slider3'>
                    <LinearProgress variant="determinate" value={90} />
                </div>
                <div className='skillcontainer__skillset'>
                    <h3>node js</h3>
                </div>
                <div className='skillcontainer__slider skillcontainer__slider4'>
                    <LinearProgress variant="determinate" value={90} />
                </div>
                <div className='skillcontainer__skillset'>
                    <h3>AWS</h3>
                </div>
                <div className='skillcontainer__slider skillcontainer__slider4'>
                    <LinearProgress variant="determinate" value={90} />
                </div>
                <div className='skillcontainer__skillset'>
                    <h3>MongoDB</h3>
                </div>
                <div className='skillcontainer__slider skillcontainer__slider4'>
                    <LinearProgress variant="determinate" value={90} />
                </div>

            </div>


        </Element>

    )
}

export default skillcontainer
