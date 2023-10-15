import React from 'react'
import { Element } from 'react-scroll'
import ProjectCard from '../../Components/ProjectCard/projects'
import project1 from '../../Components/Assects/project1.png'
import project2 from '../../Components/Assects/project2.png'
import dashboard from '../../Components/Assects/dashboard.png'
import curd from '../../Components/Assects/curd.png'
import project5 from '../../Components/Assects/project5.png'
import './project.css'


const Projects = () => {
    const Projects = [{
        img: project1,
        title: "Calculator",
        desc: "This project is a basic of using the html and css and JS to make functional calculator",
        url: "https://main--effervescent-bonbon-a966f4.netlify.app/"
    }, {
        img: project2,
        title: "survey Form",
        desc: "this project is a survey form which is use to collect data from the users",
        url: "https://64db26bc695b0f31f0820351--marvelous-horse-ac25f1.netlify.app/"
    }, {
        img: dashboard,
        title: "Admin Dashboard",
        desc: "Recreate the admin dashboard using bootstarp",
        url: "https://delicate-clafoutis-5f2e34.netlify.app/"
    }, {
        img: curd,
        title: "LOGIN PAGE",
        desc: "This project is simple of CURD opreation",
        url: "https://taupe-taiyaki-2886ae.netlify.app/"
    }, {
        img: project5,
        title: "Student and Mentor login page",
        desc: "This page is used add mentor and student and change the mentor",
        url: "https://harmonious-ganache-08b373.netlify.app/",
        backendurl: "https://mentor-assing-e18y.onrender.com"
    }]

    return (
        <Element className='projectContainer' id='projects'>
            <h1>Projects</h1>
            <p> This projects are build my self</p>
            <div className='projectContainer__projects'>

                {
                    Projects.map((project, index) => {
                        return (<ProjectCard key={index}
                            img={project.img}
                            title={project.title}
                            desc={project.desc}
                            url={project.url} />)
                    })
                }

            </div>
        </Element>
    )
}

export default Projects;
