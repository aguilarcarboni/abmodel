import React, { useState } from 'react'

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false)
  return (
    <div className='navbarContainer'>
        <div className='menu'>
            <div className='content'>
                <button className='toggler'>
                    <i class="bi bi-list" style={{fontSize: '3vmax', color: 'white'}}></i>
                </button>
                <button className='button'>
                    <p className='subtitle'>Home</p>
                </button>
                <button className='button'>
                    <p className='subtitle'>Nosotros</p>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Navbar