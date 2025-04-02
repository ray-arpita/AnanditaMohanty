import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../../Assets/logo/logo.png'

const Header = () => {
  return (

    <header>
    <div className="logo">
        <img src={Logo} />
    </div>
    <div className="content">
    <div className="menu-item">
        <a href="#about">About Me</a>
        <a href="#gallery">Services</a>
        <a href="#contact-me">Work With Me</a>
    </div>
  
    </div>
    <a target='_blank' href="https://www.instagram.com/_anandita.mohanty_/?igsh=OWl6ZHA2aGJlbzM4#" className='get-in-touch'>
     <div className='circle'></div>
      <h4>GET IN TOUCH</h4>
      </a>
    </header>
  )
}

export default Header


