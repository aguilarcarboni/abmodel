import React, { useState } from 'react'

const Quakes = () => {
  const [activeSection, setActiveSection] = useState('earthquakes')
  const [expandedCards, setExpandedCards] = useState({})

  const sections = {
    earthquakes: {
      title: 'Earthquakes',
      subtitle: 'Understanding Earth\'s Seismic Activity',
      content: [
        {
          subtitle: 'What are Earthquakes?',
          text: 'Earthquakes are the result of sudden releases of energy in the Earth\'s crust that create seismic waves. These waves can cause ground shaking, surface faulting, and various secondary effects.'
        },
        {
          subtitle: 'Measurement and Scale',
          text: 'Earthquakes are measured using seismographs and their intensity is typically reported using the Richter scale or the moment magnitude scale (MMS). The scale is logarithmic, meaning each whole number increase represents a tenfold increase in magnitude.'
        },
        {
          subtitle: 'Global Impact',
          text: 'Earthquakes can have devastating effects on human civilization, causing damage to infrastructure, triggering tsunamis, and leading to loss of life. Understanding their patterns and behavior is crucial for disaster preparedness.'
        }
      ]
    },
    moonquakes: {
      title: 'Moonquakes',
      subtitle: 'Exploring Lunar Seismic Phenomena',
      content: [
        {
          subtitle: 'Types of Moonquakes',
          text: 'Scientists have identified four different types of moonquakes: deep moonquakes, shallow moonquakes, thermal moonquakes, and those caused by meteorite impacts.'
        },
        {
          subtitle: 'Apollo Seismic Network',
          text: 'During the Apollo missions, astronauts placed seismometers on the Moon\'s surface. These instruments recorded moonquakes between 1969 and 1977, providing valuable data about lunar seismic activity.'
        },
        {
          subtitle: 'Unique Characteristics',
          text: 'Unlike earthquakes, moonquakes can last longer due to the Moon\'s more rigid structure and lower gravity. The Moon\'s crust is also more fractured, affecting how seismic waves travel.'
        }
      ]
    },
    comparison: {
      title: 'Beyond Earth',
      subtitle: 'Comparative Planetary Seismology',
      content: [
        {
          subtitle: 'Earth vs Moon',
          text: 'While both Earth and Moon experience seismic activity, their causes and characteristics differ significantly due to variations in composition, structure, and tectonic activity.'
        },
        {
          subtitle: 'Mars Quakes',
          text: 'NASA\'s InSight mission has detected seismic activity on Mars, dubbed "marsquakes," providing new insights into the Red Planet\'s internal structure and geological activity.'
        },
        {
          subtitle: 'Future Exploration',
          text: 'Understanding seismic activity across different celestial bodies helps us comprehend planetary formation, evolution, and potential hazards for future space exploration.'
        }
      ]
    }
  }

  const toggleCard = (index) => {
    setExpandedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

  return (
    <div className='quakesContainer'>
      <div className='quakes-content'>
        <h1 className='quakes-title'>
          {sections[activeSection].title}
          <div className='quakes-subtitle'>
            {sections[activeSection].subtitle}
          </div>
        </h1>

        <div className='quakes-nav'>
          <button 
            className={`nav-button ${activeSection === 'earthquakes' ? 'active' : ''}`}
            onClick={() => setActiveSection('earthquakes')}
          >
            Earthquakes
          </button>
          <button 
            className={`nav-button ${activeSection === 'moonquakes' ? 'active' : ''}`}
            onClick={() => setActiveSection('moonquakes')}
          >
            Moonquakes
          </button>
          <button 
            className={`nav-button ${activeSection === 'comparison' ? 'active' : ''}`}
            onClick={() => setActiveSection('comparison')}
          >
            Beyond Earth
          </button>
        </div>
        
        <div className='quakes-grid'>
          {sections[activeSection].content.map((item, index) => (
            <div key={index} className='quakes-card'>
              <div className='card-content'>
                <h3 className='card-title'>{item.subtitle}</h3>
                <p className={`card-description ${!expandedCards[index] ? 'truncated' : ''}`}>
                  {item.text}
                </p>
                <button 
                  className='read-more-button'
                  onClick={() => toggleCard(index)}
                >
                  {expandedCards[index] ? 'Read Less' : 'Read More'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Quakes