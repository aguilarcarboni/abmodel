import React from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation }   
from 'react-router-dom'; 
import './App.css';

import Navbar from './components/Navbar';
import Homepage from './components/Routes/homepage/Homepage';
import About from './components/Routes/about/About';
import Header from './components/Header';
import Moon from './components/Routes/moon/Moon'
import Resources from './components/Routes/resources/Resources'
import Missions from './components/Routes/moon/components/Missions';
import OurTeam from './components/Routes/about/components/OurTeam';
import SpaceApps from './components/Routes/about/components/SpaceApps';
import Quakes from './components/Routes/quakes/Quakes';
import Future from './components/Routes/future/Future';

import logo from './components/assets/nasa-logo.png'


const App = () => {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Header />
        <Routes>
          <Route exact path ='/' element={<Homepage/>}/>
          <Route exact path='/about' element={<About/>}/>
            <Route exact path='/about/our-team' element={<OurTeam/>}/>
            <Route exact path='/about/space-apps' element={<SpaceApps/>}/>
            <Route exact path ='/moon' element={<Moon/>}/>
            <Route exact path ='/moon/missions' element={<Missions />}/>
          <Route exact path='/quakes' element={<Quakes/>}/>
          <Route exact path ='/future' element={<Future/>}/>
          <Route exact path='/resources' element={<Resources/>}/>
        </Routes>
        <div className='logoContainer'>
          <img src={logo} alt='Nasa Logo' className='logo'></img>
        </div>
      </Router>
    </div>
  )
}

export default App