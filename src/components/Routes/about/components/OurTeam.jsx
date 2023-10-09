import React from 'react'
import { Link } from 'react-router-dom'

import EmptyGlobe from '../../../EmptyGlobe'

const OurTeam = () => {
  return (
    <div className='ourTeamContainer'>
      <div className='back'> 
        <Link className='button' to='../about'>
            <p className='subtitle'>Go back</p>
        </Link>
      </div>
      <div className='information'>
        <p className='subtitle'>
          We are Team Alfa Buena Onda Maravilla Dinamita Escuadrón Lobo. 
          We love space, technology, learning new things and we are very excited for this opportunity to participate! 
          We are very excited because it is just the beginning!! 🚀 It's the first time in something like this and we are very excited about all this. 
          We will do our best to do something great together ❤️ inspiring and creative 😎  Lunar Exploration, here we come!
        </p>
      </div>
      <EmptyGlobe />
    </div>
  )
}

export default OurTeam