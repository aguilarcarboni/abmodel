import { BrowserRouter as Router, Routes, Route }   
from 'react-router-dom'; 
import './App.css';

import Navbar from './components/Navbar';
import Homepage from './components/homepage/Homepage';
import About from './components/about/About';
import Moon from './components/moon/Moon'
import Resources from './components/resources/Resources'
import Missions from './components/moon/components/Missions';
import OurTeam from './components/about/components/OurTeam';
import SpaceApps from './components/about/components/SpaceApps';
import Quakes from './components/quakes/Quakes';
import Future from './components/future/Future';

import logo from './assets/nasa-logo.png'


const App = () => {
  return (
    <div className='App'>
      <Router>
        <Navbar />
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