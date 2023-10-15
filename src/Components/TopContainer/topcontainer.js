import React from 'react'
import { Element } from 'react-scroll'
import Topcontant from '../TopContant/topcontant'
import './topcontrainer.css'

const Topcontainer = () => {
    return (
        <Element name="about" className="topcontainer">
            <Topcontant />
        </Element>

    )
}

export default Topcontainer
