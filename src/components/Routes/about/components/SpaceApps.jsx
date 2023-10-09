import React from 'react'
import { Link } from 'react-router-dom'

import EmptyGlobe from '../../../EmptyGlobe'

const SpaceApps = () => {
  return (
    <div className='spaceAppsContainer'>
      <div className='back'> 
        <Link className='button' to='../about'>
            <p className='subtitle'>Go back</p>
        </Link>
      </div>
      <div className='information' style={{display: 'flex'}}>
          <div className='block'>
            <p className='title'>NASA Space Apps Challenge 2023</p>
          </div>
          <div className='block'>
          <p className='title'> Our mission</p>
        </div>
      </div>
      <EmptyGlobe />
    </div>
  )
}

export default SpaceApps