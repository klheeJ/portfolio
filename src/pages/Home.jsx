import React from 'react'
import './Home.css'

function Home() {
  return (
    <div className='main'>
        <div className='main-intro'>
            <div className='main-head'>Hello there</div>
            <div className='main-descript'>My name is Klhee Jacobs, a web developer based in Nashville, TN<br /><br /> I am passionate about developing user-friendly and efficient code and would love to work with you!</div>
        </div>
        <div className='main-pics'>
          <img src="/me.jpg" alt="Me" id='selfie-1'/>
          <img src="/nashville.jpg" alt="Nashville" id='selfie-2'/>
          <img src="/me_and_justin.jpg" alt="Me and my husband" id='selfie-3'/>
        </div>
    </div>
  )
}

export default Home
