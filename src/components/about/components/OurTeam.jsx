import React from 'react'
import { Link } from 'react-router-dom'

import TeamDescription from './TeamDescription'

const OurTeam = () => {
  return (
    <div className='ourTeamContainer'>
      <div className='back'> 
        <Link className='back-button' to='../about'>
          <span className='back-arrow'>←</span>
          <span className='back-text'>Back</span>
        </Link>
      </div>
      
      <div className='team-content'>
        <div className='team-header'>
          <h1 className='team-title'>
            Team ABMODEL
            <div className='team-subtitle'>
              "Alfa Buena Onda Maravilla Dinamita Escuadrón Lobo"
            </div>
          </h1>
          
          <div className='team-description'>
            <p>
              We love space, technology and learning new things, so we are very excited 
              for this opportunity to participate! 🚀
            </p>
            <p>
              For most of us, it is the first time participating in a Space Apps Challenge 
              and we cannot wait to do our best and create something great, inspiring and 
              creative together. Lunar Exploration, here we come! 😎
            </p>
          </div>
        </div>

        <div className='team-members'>
          <h2 className='section-title'>Meet Our Team</h2>
          <TeamDescription />
        </div>
      </div>
    </div>
  )
}

export default OurTeam