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
        <NavLink to="/">About Us</NavLink>
        <NavLink to="/">Services</NavLink>
        <NavLink to="/">Work With Me</NavLink>
    </div>
  
    </div>
    <div className='get-in-touch'>
     <div className='circle'></div>
      <h4>GET IN TOUCH</h4>
      </div>
    </header>
  )
}

export default Header


