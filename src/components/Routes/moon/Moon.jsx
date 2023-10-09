import React from 'react'
import { Link } from 'react-router-dom'
import EmptyGlobe from '../../EmptyGlobe'

const Moon = () => {
  return (
    <div className='moonInfoContainer'>
      <div className='information'>
          <div className='block'>
            <p className='title'>Moon</p>
            <p className='subtitle'>View more</p>
          </div>
          <Link className='link' to='missions'>
              <div className='button'>
                <p className='subtitle'>Vizualize lunar missions</p>
              </div>
          </Link>
        </div>
        <EmptyGlobe />
    </div>
  )
}

export default Moon