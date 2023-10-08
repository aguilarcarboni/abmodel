import React, {useState} from 'react'

import Globe from './components/Globe'

const Homepage = () => {
  const [renderGlobe, setRenderGlobe] = useState(false)
  return (
    <div className = 'homeContainer'>
        <Globe renderGlobe = {renderGlobe}/>
    </div>
  )
}

export default Homepage