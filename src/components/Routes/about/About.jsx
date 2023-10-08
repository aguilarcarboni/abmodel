import React from 'react'
import { Link } from 'react-router-dom'
import EmptyGlobe from '../../EmptyGlobe'

const About = () => {
  return (
    <div className='aboutContainer'>
        <div className='information' style={{display: 'flex'}}>
            <div className='block'>
              <p className='title'>Our Team</p>
              <Link className='link' to='our-team'>
                <div className='button'>
                  <p className='subtitle'>View more</p>
                </div>
              </Link>
            </div>
            <div className='block'>
            <p className='title'>NASA Space Apps Challenge 2023</p>
            <Link className='link' to='space-apps'>
                <div className='button'>
                  <p className='subtitle'>View more</p>
                </div>
            </Link>
          </div>
        </div>
        <EmptyGlobe />
    </div>
  )
}

export default About