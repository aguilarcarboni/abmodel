import React, {useEffect, useRef, useState} from 'react'
import useWindowDimensions from '../../../hooks/useWindowDimensions';
import * as d3 from "d3-scale"
import ReactGlobe from 'react-globe.gl';

function Globe({globeIsReady}) {
  const {height, width} = useWindowDimensions()
  const globeEl = useRef(undefined);
  const [activePoint, setActivePoint] = useState([])

  const filters = [
    {
      name: 'Points',
      description: 'Show moonquake locations'
    },
    {
      name: 'Rings',
      description: 'Show impact radius'
    },
    {
      name: 'Heatmap',
      description: 'Show intensity distribution'
    },
  ]

  const [quakes, setQuakes] = useState([])
  const [activeFilters, setActiveFilters] = useState(
    new Array(3).fill(true)
  );

  const colorScale = d3.scaleOrdinal(['#FF4B4B', '#4B83FF', '#4BFF83', '#FFD700']);

  const options = {
    focusAnimationDuration: 2000,
    focusEasingFunction: ['Cubic', 'InOut'],
    ambientLightColor: 'white',
    pointLightColor: 'white',
    pointLightIntensity: 3,
  };

  function onGlobeReady() {
    globeIsReady();
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
    globeEl.current.pointOfView({ lat: 39.6, lng: -98.5, altitude: 3}, 0); 

    // set globe settings
    globeEl.current.controls().autoRotateSpeed = 0.35;
    globeEl.current.controls().enableZoom = true;
    globeEl.current.controls().enablePan = true;
    globeEl.current.controls().dampingFactor = 0.1;

    // populate data array
    let jsonData = require('../assets/superficial_moonquake_locations.json')
    setQuakes(jsonData)
  },[])

  const pointsData = [...quakes].map((element) => ({
    ...element,
    size: element.magnitude * 4
  }));

  const ringsData = [...quakes].map((element) => ({
    ...element,
    maxR: element.magnitude * 3,
    propagationSpeed: element.magnitude * 0.5,
    repeatPeriod: 1000
  }));

  return (
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
              <p className='subtitle'>Magnitude: {el.magnitude}</p>
              <p className='subtitle'>Location: {el.lat}°N, {el.lng}°E</p>
              <p className='subtitle'>Date: {new Date(el.year, 0, el.day).toLocaleDateString()}</p>
              <p className='subtitle'>Time: {el.hour}:{el.minute}:{el.second}</p>
              {el.url && <a href={el.url} target="_blank" rel="noopener noreferrer">Learn More</a>}
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

        pointsData={activeFilters[0] ? pointsData : []}
        pointLabel={d => `
          <div style="padding: 10px; background: rgba(0,0,0,0.8); border-radius: 5px;">
            <div style="font-weight: bold; margin-bottom: 5px;">${d.label}</div>
            <div>Magnitude: ${d.magnitude}</div>
          </div>
        `}
        pointRadius="size"
        pointAltitude={0.01}
        pointColor={d => colorScale(d.agency)}
        pointResolution={3}
        pointsMerge={true}
        pointGlow={true}
        onPointClick={onPointClick}

        ringsData={activeFilters[1] ? ringsData : []}
        ringColor={d => colorScale(d.agency)}
        ringMaxRadius="maxR"
        ringPropagationSpeed="propagationSpeed"
        ringRepeatPeriod="repeatPeriod"
        ringAltitude={0.01}
      />
    </div>
  )}

export default Globe