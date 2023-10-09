import React from 'react'

import Navbar from './Navbar'
import { useLocation } from 'react-router-dom'

const Header = () => {
  const location = useLocation()

  return (
    <div className = 'headerContainer'>
        <div className = 'titleContainer'>
          <h1 className = "title" >ABMODEL</h1>
        </div>
    </div>
  )
}

export default Header