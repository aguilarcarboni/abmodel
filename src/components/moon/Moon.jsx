import { Link } from 'react-router-dom'

const Moon = () => {
  const moonSections = [
    {
      title: 'Overview',
      description: 'The Moon is Earth\'s only natural satellite and the brightest object in our night sky. It plays a crucial role in making Earth more habitable by moderating our planet\'s wobble and creating tides that have guided human civilization for millennia.',
      icon: '🌕'
    },
    {
      title: 'Seismic Activity',
      description: 'Moonquakes, discovered through NASA\'s Apollo missions, reveal that the Moon is not geologically dead. Different types of moonquakes, from deep to thermal, provide insights into lunar structure and composition.',
      icon: '📊'
    },
    {
      title: 'Apollo Experiments',
      description: 'The Apollo missions deployed sophisticated seismic monitoring equipment on the lunar surface. These instruments, part of both EASEP and ALSEP programs, collected valuable data about lunar seismic activity from 1969 to 1977.',
      icon: '🚀'
    }
  ]

  return (
    <div className='moonInfoContainer'>
      <div className='moon-content'>
        <h1 className='moon-title'>
          The Moon
          <div className='moon-subtitle'>
            Earth's Natural Satellite
          </div>
        </h1>
        
        <div className='moon-grid'>
          {moonSections.map((section, index) => (
            <div key={index} className='moon-card'>
              <div className='moon-card-content'>
                <div className='moon-card-icon'>{section.icon}</div>
                <h2 className='moon-card-title'>{section.title}</h2>
                <p className='moon-card-description'>{section.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className='moon-cta'>
          <Link className='moon-button' to='missions'>
            <span>Explore Lunar Missions</span>
            <span className='arrow'>→</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Moon