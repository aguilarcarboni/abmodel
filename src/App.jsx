import React from 'react'
import './App.css';

import Homepage from './Routes/homepage/Homepage';
import Navbar from './components/Navbar';
import Header from './Header';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Homepage/>
    </div>
  )
}

export default App