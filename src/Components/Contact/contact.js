import React from 'react'
import { Element } from 'react-scroll'
import './contact.css'
const Contact = () => {
    return (
        <Element ClassName='contact' id='contact'>
            <div className='contact'>
                <h1>Contact</h1>
                <div className='contact__container'>

                    <p>
                        Email: <span>rajrampragash0208@gmail.com</span>
                    </p>
                    <p>
                        Github username : <span>@RajRampragash</span>
                    </p>
                    <p>
                        Linkedin username : <span>@raj-rampragash1207</span>
                    </p>

                </div>

            </div>



        </Element>
    )
}

export default Contact