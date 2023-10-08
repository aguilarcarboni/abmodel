import React, { useState } from 'react'
import {Link, useLocation} from 'react-router-dom'

const Navbar = () => {

    const [isOpen, setOpen] = useState(false)
    const location = useLocation()

    function openNavbar() {
        if (isOpen) {
            setOpen(false)
        } else {
            setOpen(true)
        }
    }

  return (
    <div className='navbarContainer'>
       <div className='menu'>
            <Link className='button' to='/'>
                <p className={location.pathname === '/' ? 'link active':'link'} >Home</p>
            </Link>
            <Link className='button' to='/about'>
                <p className={location.pathname === '/about' ? 'link active':'link'}>About us</p>
            </Link>
            <Link className='button' to='/moon'>
                <p className={location.pathname === '/moon' ? 'link active':'link'}>Moon</p>
            </Link>
            <Link className='button' to='/earthquakes'>
                <p className={location.pathname === '/earthquakes' ? 'link active':'link'}>Earthquakes</p>
            </Link>
            <Link className='button' to='/404'>
                <p className={location.pathname === '/500' ? 'link active':'link'}>Future ...</p>
            </Link>
            <Link className='button' to='/resources'>
                <p className={location.pathname === '/resources' ? 'link active':'link'}>Resources</p>
            </Link>
        </div>
    </div>
  )
}

export default Navbar