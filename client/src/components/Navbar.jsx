import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"
import { useAuth } from '../store/Auth'

const Navbar = () => {
  const {isLoggedIn} = useAuth()
  return (
    <>
    <div className="container">
        <div className="logobrand">
            <NavLink className="nav-link" to='/'> 
             <img src='/images/logo.png' alt='logo'/>
             </NavLink>
        </div>
        <nav>
            <ul>
                <li><NavLink className="nav-link" to ='/'>Home</NavLink></li>
                <li><NavLink className="nav-link" to ='/about'>About</NavLink></li>
                <li><NavLink className="nav-link" to ='/service'>Services</NavLink></li>
                <li><NavLink className="nav-link" to ='/contact'>Contact</NavLink></li>
                {
                  isLoggedIn ?
                  <li><NavLink className="nav-link" to ='/logout'>Logout</NavLink></li>
                  :
                  <>
                  <li><NavLink className="nav-link" to ='/register'>Register</NavLink></li>
                  <li><NavLink className="nav-link" to='/login'>Login</NavLink></li>
                  </>
                }
                
            </ul>
        </nav>
    </div>
    </>
  )
}

export default Navbar