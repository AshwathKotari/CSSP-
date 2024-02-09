import React from 'react'
import { NavLink} from 'react-router-dom'
import './Navbar.css'
export const Navbar = () => {
  return (
    <nav className='nav'>
        <ul className='ul'>
          <li className='li'><NavLink to='/'>Home</NavLink></li>
          <li className='li'><NavLink to='/About'>About</NavLink></li>
        </ul>
        
       
        
       
    </nav>
    
  )
}
