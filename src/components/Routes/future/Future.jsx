import React from 'react'

const Future = () => {

    const implementations = [
        {
            name: 'Equivalent Earthquake Assessment',
            desc: 'By knowing the locations and details of lunar earthquakes, including magnitude and depth, it becomes possible to draw parallels between lunar seismic activity and earthquakes on Earth. This knowledge can be used to determine the level of structural resistance required for infrastructure on the Moon.'
        }, 
        {
            name:'Planetary Seismic Studies',
            desc:'The study of earthquakes allows for investigations into the composition of the internal layers of celestial bodies. Just as seismic studies have been utilized on Earth, they can be applied to the study of other planets. These investigations complement our understanding and expand the knowledge base of planetary research.'
        },
        {
            name:'Geological Insights',
            desc:'Identifying lunar earthquakes enables the study and understanding of how seismic waves propagate through different rock materials and how rock types vary. This information can be used to define the geology of other planets and complement geological studies conducted on Earth.'
        },
        {
            name:'Historical Data Utilization',
            desc:'Leveraging existing historical data represents a significant step forward in the study of other planets, initiating planetary seismic exploration and the investigation of residual activity on celestial bodies.'
        },
        {
            name:'Artemis Mission and Lunar Infrastructure',
            desc:'The upcoming Artemis mission aims to establish a sustained human presence on the Moon, which could serve as a launchpad for space exploration to other planets like Mars. Seismic maps can assist in determining optimal locations for future infrastructure and provide essential input for designing earthquake-resistant structures on the Moon.'
        },
        {
            name: 'Resource Exploration and Seismic Risk',
            desc: 'In the Artemis mission, the search for resources such as ice (for conversion into potable water), hydrogen for fuel, or oxygen for breathing is crucial. Its essential to consider seismic risks when establishing facilities for these vital resources, which are of significant importance for the missions success.'
        }
    ]
  return (
    <div className='futureContainer'>
    <div className='information'>
      <div className='block'>
          <p className='title'>
            Future collaborations
          </p>
          <div className='divider'>
            {implementations.map((el,index) => (
                <div key={index} className='div-block'>
                <div className='title-block'>
                    <p className='subtitle'> {el.name} </p>
                </div>
                <p className='subtitle' style={{fontSize: '1.5vmax'}}>{el.desc}</p>
            </div>
            ))}
          </div>
        </div>
    </div>
  </div>
  )
}

export default Future