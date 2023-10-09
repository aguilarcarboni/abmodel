import React, { useEffect, useState, useCallback } from 'react'

import Globe from './components/Globe'
import LoadingPage from '../../LoadingPage'

const Homepage = () => {
  const [loading, setLoading] = useState(true)
  
  function onGlobeReady() {
    // setLoading(false)
    console.log('test');
  }

  return (
    <>
      <LoadingPage showLoadingPage={loading}/>
      <div className = 'homeContainer'>
        <Globe globeIsReady={onGlobeReady}/>
      </div>
    </>
  )
}

export default Homepage