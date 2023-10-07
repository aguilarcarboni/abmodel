import React from 'react'

import Navbar from './components/Navbar'

const Header = () => {
  return (
    <div className = 'headerContainer'>
        <Navbar />
        <div className = 'titleContainer'>
          <h1 className = "title" >ABMODEL</h1>
          <p className = "subtitle" >  Proyecto para NASA Space Apps 2023</p>
        </div>
        <div style={{width: '33%'}}></div>
    </div>
  )
}

export default Header