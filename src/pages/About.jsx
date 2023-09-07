import React from 'react'
import Server from '../api/Server'
import './About.css'

function About() {
  return (
    <div className='about-main'>
      <div className='about-info'>
        <p className='about-info-text' id='about-info1'>I started my journey in software engineering about a year ago today. Prior to last year I have been working as 
        a family nurse practitioner for 7 years. Although I have enjoyed my time working in the 
        healthcare field, I realized that my true passion lied in programming. I enjoy the problem-solving aspect 
        of this field and the duality of creativity and precision. My aim with programming is to provide clean, efficient, user-friendly coding.</p>
        <p className='about-info-text' id='about-info2'>During my free time, I enjoy playing many types of games, ranging from boardgames to game consoles. 
          The more I played games the more I realized how much I enjoyed the problem-solving aspect of games. I always 
          told my friends that my favorite part of playing games was figuring out the rules. I also delved into theater 
          when I was younger and it is still a passion of mine. I believe this is where the creative side of me comes in display.
        </p>
        <p className='about-info-text' id='about-info3'>On this page are the current temperatures of the places I have grown up in. 
        As funny as it sounds, I love having the weather of the different places on my phone to glance from time 
        to time to feel connected to those locations in some way. 
        </p>
      </div>
      <div className='about-temp'>
        <Server />
      </div>
    </div>
  )
}

export default About
