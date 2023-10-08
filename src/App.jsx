import React from 'react'
import { BrowserRouter as Router, Routes, Route }   
from 'react-router-dom'; 
import './App.css';

import Homepage from './Routes/homepage/Homepage';
import About from './Routes/about/About';
import Header from './Header';

const App = () => {
  return (
    <div className='App'>
      <Router>
      <Header />
        <Routes>
          <Route exact path ='/' element={<Homepage/>}/>
          <Route exact path='/about' element={<About/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App