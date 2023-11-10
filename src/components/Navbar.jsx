import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {

  const [showNav, setShowNav] = useState(false)

  const toggleNavItems = () => {
    setShowNav(!showNav)
  }

  const closeNav = () => {
    setShowNav(false)
  }

  return (
    <div className='heading'>
      <div className='heading-row'>
        <div className='heading-name'>
          <Link to='/' className= 'links' id='sub-name'>Klhee.Jacobs</Link>
        </div>
        <div className={`heading-info ${showNav ? 'open' : ''}`}>
          <div className='heading-sub'>
            <Link 
              to='/About' 
              className= 'links' 
              id='sub-about'
              onClick={closeNav}><i class="fa-solid fa-person"></i>  About Me</Link>
            <Link 
              to='/Projects' 
              className= 'links' 
              id='sub-projects'
              onClick={closeNav}><i class="fa-solid fa-layer-group"></i>  Projects</Link>
          </div>
          <div className='heading-connect'>
            <Link 
              to="/Connect" 
              className= 'links'
              id='sub-connect'
              onClick={closeNav}>Let's Connect!</Link>
          </div>
        </div>
      </div>
      <button className="navbar-toggle" onClick={toggleNavItems}>
          <i className="fa fa-bars" id='toggle-symbol'></i>
      </button>
    </div>
  )
}

export default Navbar
