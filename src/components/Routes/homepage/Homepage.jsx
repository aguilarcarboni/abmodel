import React, { useEffect, useState } from 'react'

import Globe from './components/Globe'
import LoadingPage from '../../LoadingPage'

const Homepage = () => {
  const [loading, setLoading] = useState(true)
  
  function globeIsLoading(isLoading) {
    setLoading(isLoading)
  }


  return (
    <>
      <LoadingPage showLoadingPage={loading}/>
      <div className = 'homeContainer'>
        <Globe globeIsLoading={globeIsLoading}/>
      </div>
    </>
  )
}

export default Homepage