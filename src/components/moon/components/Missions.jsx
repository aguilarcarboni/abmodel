import {useEffect, useRef, useState} from 'react'
import * as d3 from "d3-scale"
import useWindowDimensions from '../../../hooks/useWindowDimensions';
import ReactGlobe from 'react-globe.gl';
import LoadingPage from '../../LoadingPage';

function Missions() {
  const [loading, setLoading] = useState(true)
  const [landingSites, setLandingSites] = useState([]);
  const [activePoint, setActivePoint] = useState([])
  const [activeFilters, setActiveFilters] = useState(new Array(4).fill(true));
  
  const {height, width} = useWindowDimensions()
  const globeEl = useRef(undefined);

  const colorScale = d3.scaleOrdinal()
    .domain(['NASA', 'USSR', 'CNSA', 'ISRO'])
    .range(['#1e88e5', '#d32f2f', '#ffc107', '#43a047']);

  const filters = [
    {
      name: 'NASA',
      description: 'US Space Agency'
    },
    {
      name: 'USSR',
      description: 'Soviet Space Program'
    },
    {
      name: 'CNSA',
      description: 'Chinese Space Agency'
    },
    {
      name: 'ISRO',
      description: 'Indian Space Agency'
    }
  ];

  const options = {
    focusAnimationDuration: 2000,
    focusEasingFunction: ['Cubic', 'InOut'],
    ambientLightColor: 'white',
    pointLightColor: 'white',
    pointLightIntensity: 3,
  };

  function onGlobeReady() {
    setLoading(false)
  }

  function onPointClick(d) {
    if (activePoint.length === 0) {
      globeEl.current.pointOfView({lat: d.lat, lng: d.lng, altitude: 1.5}, 1000)
      setActivePoint(activePoint => [...activePoint, d]);
    } else {
      globeEl.current.pointOfView({lat: d.lat, lng: d.lng, altitude: 3}, 1000)
      setActivePoint([])
    }
  }

  const handleOnChange = (position) => {
    const updatedCheckedState = activeFilters.map((item, index) =>
      index === position ? !item : item
    );
    setActiveFilters(updatedCheckedState);
  };

  useEffect(() => {
    // set viewport settings
    globeEl.current.pointOfView({ lat: 0, lng: 0, altitude: 3}, 0); 

    // set globe settings
    globeEl.current.controls().autoRotateSpeed = 0.35;
    globeEl.current.controls().enableZoom = true;
    globeEl.current.controls().enablePan = true;
    globeEl.current.controls().dampingFactor = 0.1;

    let jsonData = require('../assets/moon_landings.json');
    setLandingSites(jsonData)
  }, []); 

  const filteredSites = landingSites.filter((site) => {
    const agencyIndex = filters.findIndex(f => f.name === site.agency);
    return activeFilters[agencyIndex];
  });
  
  return (
    <>
      <LoadingPage showLoadingPage={loading}/>
      <div className='globeContainer'>
        <div className='filtersContainer'>
          {filters.map((el, index) => (
            <div key={index} className='button'>
              <div>
                <label>{el.name}</label>
                <p style={{fontSize: '0.8rem', opacity: 0.7}}>{el.description}</p>
              </div>
              <input
                type="checkbox"
                name={el.name}
                value={el.name}
                checked={activeFilters[index]}
                onChange={() => handleOnChange(index)}
              />
            </div>
          ))}
        </div>
        {activePoint.length !== 0 && 
          <div className='popup'>
            {activePoint.map((el,index)=> (
              <div key={index}>
                <h3 style={{fontSize: '1.2rem', marginBottom: '1rem'}}>{el.label}</h3>
                <p className='subtitle'>Agency: {el.agency}</p>
                <p className='subtitle'>Program: {el.program}</p>
                <p className='subtitle'>Location: {el.lat}°N, {el.lng}°E</p>
                <p className='subtitle'>Date: {new Date(el.date).toLocaleDateString()}</p>
                {el.url && 
                  <a href={el.url} target="_blank" rel="noopener noreferrer" className="moon-button">
                    <span>Learn More</span>
                    <span className='arrow'>→</span>
                  </a>
                }
              </div>
            ))}
          </div>
        }
        <ReactGlobe
          globeImageUrl={"//unpkg.com/globe.gl/example/moon-landing-sites/lunar_surface.jpg"}
          backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
          backgroundColor="#000000"
          options={options}
          height={height}
          width={width}

          showGlobe={true}
          showAtmosphere={true}
          atmosphereColor="#ffffff"
          atmosphereAltitude={0.1}
          ref={globeEl}
          animateIn={true}
          waitForGlobeReady={true}
          onGlobeReady={onGlobeReady}

          pointsData={filteredSites}
          pointLabel={d => `
            <div style="padding: 10px; background: rgba(0,0,0,0.8); border-radius: 5px;">
              <div style="font-weight: bold; margin-bottom: 5px;">${d.label}</div>
              <div>${d.agency} - ${d.program} Program</div>
              <div>Landing on ${new Date(d.date).toLocaleDateString()}</div>
            </div>
          `}
          pointRadius={1.5}
          pointAltitude={0.01}
          pointColor={d => colorScale(d.agency)}
          pointResolution={36}
          pointsMerge={true}
          pointGlow={true}
          onPointClick={onPointClick}
        />
      </div>
    </>
  )
}

export default Missions