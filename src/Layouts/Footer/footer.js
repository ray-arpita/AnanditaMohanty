import React from 'react'
import Facebook from '../../Assets/facebook.png';
import Linkedin from '../../Assets/linkedin.png';
import Twitter from '../../Assets/twitter.png';
import Logo from '../../Assets/footer-logo.png';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="top-content">
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
 
    </div>
    <div className="socials">
  <a href='/'>
    <img src={Facebook}/>
  </a>
  <a href='/'>
    <img src={Linkedin}/>
  </a>
  <a href='/'>
    <img src={Twitter}/>
  </a>
   </div>
   </div>
      <div className="middle-content">
        <div className="left-wrp">   
        <span>Contact Us:</span>
        <h4>Email: info@positivus.com</h4>
        <h4>Phone: 555-567-8901</h4>
        <h4>Address: 1234 Main St
Moonstone City, Stardust State 12345</h4>
</div>
        <div className="right-wrp">
          <input type='text' placeholder='Email'/>
          <button>Subscribe to news</button>
        </div>
      </div>
      <div className="bottom-content">
        <h4>© 2023 Positivus. All Rights Reserved.</h4>
        <NavLink to="/">Privacy Policy</NavLink>
      </div>

    </footer>
  )
}

export default Footer

