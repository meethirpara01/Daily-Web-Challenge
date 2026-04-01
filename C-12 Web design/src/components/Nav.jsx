import React from 'react'
import { Link } from 'react-router'

const Nav = () => {
  return (
    <nav className='navbar'>
        <div className="navbar-logo">
            <div className="navbar-item">
                <Link to="/">M E E T</Link>
            </div>
        </div>
        <div className="navbar-items">
            <div className="navbar-item">
                <Link to="/">Home</Link>
            </div>
            <div className="navbar-item">
                <Link to="/">About</Link>
            </div>
            <div className="navbar-item">
                <Link to="/">Contact</Link>
            </div>
        </div>
    </nav>
  )
}

export default Nav