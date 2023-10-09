import React from 'react'
import { Link } from 'react-router-dom'

import EmptyGlobe from '../../../EmptyGlobe'
import TeamDescription from './TeamDescription'

const OurTeam = () => {
  return (
    <div className='ourTeamContainer'>
      <div className='back'> 
        <Link className='button' to='../about'>
            <p className='subtitle'>Go back</p>
        </Link>
      </div>
      <div className='information'>
        <div className='block'>
          <p className='title'>
            We are Team Alfa Buena Onda Maravilla Dinamita Escuadrón Lobo. 
          </p>
          <p className='title'>
            ABMODEL for short.
          </p>
          <p className='subtitle'>
            We love space, technology and learning new things, so we are very excited for this opportunity to participate!  🚀
          </p>
          <p className='subtitle'>
            For most of us, it is the first time participating in a Space Apps Challenge and we cannot wait to do our best and create something great, inspiring and creative together. Lunar Exploration, here we come! 😎
          </p>
        <TeamDescription />
        </div>
      </div>
      <EmptyGlobe />
    </div>
  )
}

export default OurTeam