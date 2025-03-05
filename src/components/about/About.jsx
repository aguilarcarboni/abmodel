import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className='aboutContainer'>
      <div className='about-content'>
        <h1 className='about-title'>
          About ABMODEL
          <div className='about-subtitle'>
            Exploring lunar seismic activity through innovation
          </div>
        </h1>
        
        <div className='about-grid'>
          <div className='about-card team-card'>
            <div className='card-content'>
              <h2 className='card-title'>Our Team</h2>
              <p className='card-description'>
                Meet the passionate minds behind ABMODEL - a team of space enthusiasts, 
                developers, and innovators working together to explore lunar seismic activity.
              </p>
              <Link className='card-link' to='our-team'>
                <span className='link-text'>Meet the Team</span>
                <span className='link-arrow'>→</span>
              </Link>
            </div>
          </div>

          <div className='about-card space-apps-card'>
            <div className='card-content'>
              <h2 className='card-title'>NASA Space Apps Challenge 2023</h2>
              <p className='card-description'>
                Discover how we participated in NASA's global hackathon to create innovative
                solutions for space exploration and lunar research.
              </p>
              <Link className='card-link' to='space-apps'>
                <span className='link-text'>Learn More</span>
                <span className='link-arrow'>→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About