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
                <p className={location.pathname === '/about' || location.pathname === '/about/our-team' ||location.pathname === '/about/space-apps' ? 'link active':'link'}>About us</p>
            </Link>
            <Link className='button' to='/moon'>
                <p className={location.pathname === '/moon' || location.pathname === '/moon/missions' ? 'link active':'link'}>Moon</p>
            </Link>
            <Link className='button' to='/quakes'>
                <p className={location.pathname === '/quakes' ? 'link active':'link'}>Quakes</p>
            </Link>
            <Link className='button' to='/future'>
                <p className={location.pathname === '/future' ? 'link active':'link'}>Future collabs</p>
            </Link>
            <Link className='button' to='/resources'>
                <p className={location.pathname === '/resources' ? 'link active':'link'}>Resources</p>
            </Link>
        </div>
    </div>
  )
}

export default Navbar