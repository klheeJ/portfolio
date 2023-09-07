import React from 'react'
import './Projects.css'

function Projects() {
  return (
    <div className='projects-main'>
        <div className='projects-links'>
            <div className='projects-square'><i id='square2'class="fa-solid fa-square-full"></i> <a id ='project-link' target='_blank?' href="https://github.com/klheeJ/park-website.git">Park</a></div>
            <div className='projects-square'><i id='square3'class="fa-solid fa-square-full"></i> <a id ='project-link' target='_blank?' href="https://github.com/klheeJ/gym-webiste.git">Gym</a></div>
            <div className='projects-square'><i id='square4'class="fa-solid fa-square-full"></i> <a id ='project-link' target='_blank?' href="https://github.com/klheeJ/Javascript_ChicagoArt_API.git">Chicago Art API</a></div>
            <div className='projects-square'><i id='square1'class="fa-solid fa-square-full"></i> <a id ='project-link' target='_blank?' href="https://github.com/klheeJ/Theater-Company.git">Theater Company</a></div>
            <div className='projects-square'><i id='square5'class="fa-solid fa-square-full"></i> <a id ='project-link' target='_blank?' href="https://github.com/klheeJ/Advice_React_Final.git">Advice</a></div>
        </div>
        <div className='projects-image'>
            <img className='projects-picture' src="./programming.jpg" alt="programming" />
        </div>
    </div>
  )
}

export default Projects
