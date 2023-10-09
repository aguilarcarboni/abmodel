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
            <h1 className='title'>NASA Space Apps Challenge 2023</h1>
            <p className='subtitle'> 
              The NASA International Space Apps Challenge (Space Apps) is a 
              global hackathon that brings together a diverse community of coders, scientists, 
              designers, and innovators. Participants from cities worldwide are using their creativity
              with NASA's open data to tackle real-world problems on Earth and in space.
            </p>
            <p className='subtitle'>
              Space Apps promotes collaboration, creativity, and critical thinking, aiming to inspire 
              the next generation of scientists, technologists, and engineers. The event has attracted over 
              220,000 participants from more than 185 countries since its launch in 2012, harnessing NASA's open data to develop innovative 
              solutions to challenges on our planet and beyond. 🚀🪐🌎
            </p>
            <p className='subtitle'>See more: https://www.spaceappschallenge.org/about/</p>
          </div>
          <div className='block'>
          <h1 className='title'> 
            Make a Moonquake Map 2.0!
          </h1>
          <p className='subtitle'>
            Did you know that when the NASA’s Apollo astronauts explored the Moon they left behind several instruments to collect geophysical data near each Apollo landing site? 😯
          </p>
          <p className='subtitle'>
            Our challenge is to develop an app that plots the seismic data these instruments transmitted back to Earth on an interactive 3D digital moon globe for the public 🌑 
          </p>
          <p className='subtitle'>            
            See more: https://www.spaceappschallenge.org/2023/challenges/make-a-moonquake-map-20/
            </p>
        </div>
      </div>
      <EmptyGlobe />
    </div>
  )
}

export default SpaceApps