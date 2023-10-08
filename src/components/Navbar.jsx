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
       <div className={isOpen ? 'menu':'menu hidden'}>
            <div className='content'>
                <div className='linksContainer'>
                    <Link className='button' to='/'>
                        <p className={location.pathname === '/' ? 'link active':'link'} >Home</p>
                    </Link>
                    <Link className='button' to='/about'>
                        <p className={location.pathname === '/about' ? 'link active':'link'}>About us</p>
                    </Link>
                    {location.pathname === '/about' || location.pathname === '/about/our-team' || location.pathname === '/about/space-apps' ? 
                        <Link className='button' to='about/our-team'>
                            <p className={location.pathname === '/about/our-team' ? 'active indent': 'indent'}>Our Team</p>
                        </Link>:''
                    }
                    {location.pathname === '/about' || location.pathname === '/about/our-team' || location.pathname === '/about/space-apps' ? 
                        <Link className='button' to='about/space-apps'>
                            <p className={location.pathname === '/about/space-apps' ? 'active indent': 'indent'}>Space Apps</p>
                        </Link>:''
                    }
                    <Link className='button' to='/moon'>
                        <p className={location.pathname === '/moon' ? 'link active':'link'}>Moon</p>
                    </Link>
                    {location.pathname === '/moon' || location.pathname === '/moon/missions'? 
                        <Link className='button' to='/moon/missions'>
                            <p className={location.pathname === '/moon/missions' ? 'active indent': 'indent'}>Missions</p>
                        </Link>:''
                    }
                    <Link className='button' to='/quakes'>
                        <p className={location.pathname === '/quakes' ? 'link active':'link'}>Quakes</p>
                    </Link>
                    <Link className='button' to='/404'>
                        <p className={location.pathname === '/500' ? 'link active':'link'}>Future ...</p>
                    </Link>
                    <Link className='button' to='/resources'>
                        <p className={location.pathname === '/resources' ? 'link active':'link'}>Resources</p>
                    </Link>
                </div>
            </div>
        </div>
        <button className='toggler' onClick = {openNavbar}>
            {!isOpen ? 
                <i class="bi bi-list" style={{fontSize: '2.5vmax', color: 'white'}}></i>
                :
                <i class="bi bi-x-lg" style={{fontSize: '2.5vmax', color: 'white'}}></i>
            }
        </button>
    </div>
  )
}

export default Navbar