import React from 'react'

const Resources = () => {
  const resources = [
    {
      title: "ABMODEL Project",
      url: "https://abmodel-kappa.vercel.app/",
      description: "Official project website showcasing our lunar seismic visualization work."
    },
    {
      title: "Project Planning",
      url: "https://jamboard.google.com/d/1LYc2lkACWDQPqBNe8mqTd4OYVIta9zisJGIDmwwAjBY/edit?usp=meet_whiteboard",
      description: "Collaborative planning board for the ABMODEL project development."
    },
    {
      title: "Apollo Seismic Data",
      url: "https://pds-geosciences.wustl.edu/missions/apollo/seismic_event_catalog.html",
      description: "Comprehensive catalog of lunar seismic events recorded during the Apollo missions."
    },
    {
      title: "Apollo Experiments",
      url: "https://history.nasa.gov/alsj/alsj-Experiments.html",
      description: "Detailed documentation of scientific experiments conducted during the Apollo program."
    }
  ];

  return (
    <div className='resourcesContainer'>
      <div className='resources-content'>
        <h1 className='resources-title'>
          Cosmic Resources
          <div className='resources-subtitle'>
            Explore our collection of space research materials
          </div>
        </h1>
        
        <div className='resources-grid'>
          {resources.map((resource, index) => (
            <a 
              key={index} 
              href={resource.url} 
              className='resource-card'
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className='resource-content'>
                <h3 className='resource-card-title'>{resource.title}</h3>
                <p className='resource-description'>{resource.description}</p>
                <div className='resource-link'>
                  <span className='link-text'>Explore</span>
                  <span className='link-arrow'>→</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Resources