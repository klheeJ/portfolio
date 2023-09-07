import React from 'react'
import './Connect.css'

function Connect() {
  return (
    <div className='connect'>
      <div className='connect-main'>
        <div className='connect-text'>I would love to connect! You can find me at:</div>
        <div className='connect-social'>
          <ul><a id='connect-links' href = "mailto: bangklhee@gmail.com"><i class="fa-solid fa-envelope"></i></a></ul>
          <ul><a id='connect-links' href="https://www.linkedin.com/in/klhee-jacobs-99743a161/" target='_blank'><i class="fa-brands fa-linkedin"></i></a></ul>
          <ul><a id='connect-links' href="https://www.instagram.com/klheee/" target='_blank'><i class="fa-brands fa-instagram"></i></a></ul>
        </div>
      </div>
    </div>
  )
}

export default Connect
