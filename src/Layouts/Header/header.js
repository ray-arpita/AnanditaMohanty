import React from 'react'
import Logo from '../../Assets/logo.png'
import { NavLink } from 'react-router-dom'

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
        <NavLink to="/">Use Cases</NavLink>
        <NavLink to="/">Pricing</NavLink>
        <NavLink to="/">Blog</NavLink>
    </div>
    <button className='btn-secondary'>Request a quote</button>
    </div>
    </header>
  )
}

export default Header


