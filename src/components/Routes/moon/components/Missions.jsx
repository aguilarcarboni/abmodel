import React, {useEffect, useRef, useState} from 'react'
import { Link } from 'react-router-dom';
import * as d3 from "d3-scale"

import useWindowDimensions from '../../../hooks/useWindowDimensions';

import ReactGlobe from 'react-globe.gl';

function Missions() {

  const [landingSites, setLandingSites] = useState([]);
  const [activePoint, setActivePoint] = useState([])
  
  const {height, width} = useWindowDimensions()
  const globeEl = useRef(undefined);

  const colorScale = d3.scaleOrdinal(['orangered', 'mediumblue', 'darkgreen', 'yellow']);
  const labelsTopOrientation = new Set(['Apollo 12', 'Luna 2', 'Luna 20', 'Luna 21', 'Luna 24', 'LCROSS Probe']); // avoid label collisions

  const options = {
    focusAnimationDuration: 2000,
    focusEasingFunction: ['Linear', 'None'],
    ambientLightColor: 'white',
  };

  function onPointClick(d) {
    if (activePoint.length === 0) {
      setActivePoint(activePoint => [...activePoint, d]);
    } else {
      setActivePoint([])
    }
  }

  useEffect(() => {
    
    // aim at continental US centroid 
    globeEl.current.pointOfView({ lat: 39.6, lng: -98.5, altitude: 3}); 
    globeEl.current.controls().autoRotateSpeed = 0.5;

    let jsonData = require('../assets/moon_landings.json');
    setLandingSites(jsonData)

  }, []); 

  console.log(landingSites)
  
  return (
    <div className='missionsContainer'>
      <div className='back'> 
        <Link className='button' to='../moon'>
            <p className='subtitle'>Go back</p>
        </Link>
      </div>
      {activePoint.length !== 0 ? <div className='popup'>
        {activePoint.map((el, index) => (
          <div key={index}>{el.lat}</div>
        ))}
      </div>:''}
      <ReactGlobe
        globeImageUrl={"//unpkg.com/globe.gl/example/moon-landing-sites/lunar_surface.jpg"}
        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
        backgroundColor = "#000000"
        options={options}
        height = {height}
        width={width}

        showGlobe={true}
        showAtmosphere={true}
        ref={globeEl}

        pointsData={landingSites}
        labelSize={1.7}
        pointRadius={1}
        pointAltitude={0}
        pointColor={d => colorScale(d.agency)}
        pointLabel={d => `
          <div><b>${d.label}</b></div>
          <div>${d.agency} - ${d.program} Program</div>
          <div>Landing on <i>${new Date(d.date).toLocaleDateString()}</i></div>
        `}
        onPointClick = {d => onPointClick(d)}
      />
    </div>
  )}

export default Missions