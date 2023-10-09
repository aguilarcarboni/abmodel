import React from 'react'
import { Link } from 'react-router-dom'
import EmptyGlobe from '../../EmptyGlobe'

const Moon = () => {
  return (
    <div className='moonInfoContainer'>
      <div className='information'>
          <div className='block'>
            <p className='title'>The Moon, our natural satellite </p>
            <p className='subtitle'>
              The Moon is the Earth's only natural satellite and is the brightest and largest object in our night sky. The Moon makes Earth a more livable planet by moderating our home planet's wobble on its axis, leading to a relatively stable climate. It also causes tides, creating a rhythm that has guided humans for thousands of years.
            </p>
            <p>
              If you what to know more basic information on the moon click here. https://science.nasa.gov/moon/ 
            </p>
            <p className='subtitle'>
              Did you know that Moonquakes existed?
              <br></br>
              Passive seismic experiments (PSE) are experiments led by NASA that use instruments designed to monitor the environment of each Apollo landing site for at least a year after the astronauts' departure.
              <br></br>
              Two different types of PSE packets were configured:
              <br></br>
              Apollo 11 astronauts deployed units of the Apollo Early Surface Experiment Package (EASEP) 
              <br></br>
              21 July 1969 
              <br></br>
              This package consisted of two solar panels to provide power (the EASEP could only operate during lunar day), an antenna and communications system to send data to Earth ground stations and receive commands, a passive seismometer, designed to measure seismic activity and physical properties of the lunar crust and interior, and a lunar dust detector, to measure dust accumulation and radiation damage to solar cells. 
              Astronauts on the Apollo 12, 14, 15 and 16 missions deployed the most advanced lunar surface of the Apollo 
              <br></br>
              Apollo Lunar Surface Experiments Package (ALSEP)
              <br></br>
              19 November 1969 - 30 September 1977
              <br></br>
              Their goal was to determine subsurface properties and measure extremely small vibrations of the lunar surface caused by distant lunar earthquakes, man-made explosions and spacecraft impacts.
              Also, there are Lunar Active Seismic Experiment (ASE) on the Apollo 14, 16 was complementary to the Passive Seismic Experiment in two aspects: scale and energy source. The Passive Experiment was designed to study the entire Moon; the Active Experiment to study the local area. Instead of passively waiting for natural events on the Moon to produce shock waves, the Active Experiment provided its own sources.
              <br></br>
              You want to know more? Visit the official mission site:
              https://history.nasa.gov/alsj/HamishALSEP.html 
              https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1969-059C 
            </p>
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