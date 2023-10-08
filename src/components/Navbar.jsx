import React, { useState } from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false)
  return (
    <div className='navbarContainer'>
        <div className='menu'>
            <div className='content'>
                <button className='toggler'>
                    <i class="bi bi-list" style={{fontSize: '3vmax', color: 'white'}}></i>
                </button>
                <Link to='/'>
                    <p className='subtitle'>Home</p>
                </Link>
                <Link to='/about'>
                    <p className='subtitle'>Nosotros</p>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar