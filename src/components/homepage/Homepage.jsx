import { useState, useEffect } from 'react'
import Globe from './components/Globe'
import LoadingPage from '../LoadingPage'

const Homepage = () => {
  const [loading, setLoading] = useState(true)
  const [showWelcome, setShowWelcome] = useState(true)
  
  function onGlobeReady() {
    setLoading(false)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false)
    }, 5000) // Hide welcome message after 5 seconds

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <LoadingPage showLoadingPage={loading}/>
      <div className="homeContainer">
        {showWelcome && (
          <div className="welcomeOverlay">
            <h1>Welcome to ABMODEL</h1>
            <p>
              Explore the lunar surface and discover moonquake data through our interactive 3D visualization.
              Use the filters to view different data layers and click on points to learn more about specific events.
            </p>
          </div>
        )}
        <Globe globeIsReady={onGlobeReady}/>
      </div>
    </>
  )
}

export default Homepage