import React from 'react'
import { NavLink } from 'react-router-dom'

const Card = ({title , image , path}) => {
  return (
    <section className='custom-card'>
        <div className="content">
            <h4>{title}</h4>
            <NavLink to={path}>Learn more</NavLink>
        </div>
        <div className="img">
            <img src={image} alt="" />
        </div>

    </section>
  )
}

export default Card