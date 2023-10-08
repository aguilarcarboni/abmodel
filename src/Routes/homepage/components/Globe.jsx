import React, {useEffect, useRef, useState} from 'react'
import useWindowDimensions from '../../../hooks/useWindowDimensions';
import * as d3 from "d3-scale"
import ReactGlobe from 'react-globe.gl';

function Globe({globeIsReady}) {
  const [landingSites, setLandingSites] = useState([]);

  const {height, width} = useWindowDimensions()
  const globeEl = useRef(undefined);
  const colorScale = d3.scaleOrdinal(['orangered', 'mediumblue', 'darkgreen', 'yellow']);
  const labelsTopOrientation = new Set(['Apollo 12', 'Luna 2', 'Luna 20', 'Luna 21', 'Luna 24', 'LCROSS Probe']); // avoid label collisions

  const options = {
    focusAnimationDuration: 2000,
    focusEasingFunction: ['Linear', 'None'],

    pointLightIntensity: 0,
    globeGlowColor: 'blue',
  };

  function onClick() {
    if (globeEl.current.controls().autoRotate) {
      globeEl.current.controls().autoRotate = false;
    } else {
      globeEl.current.controls().autoRotate = true;
    }
  }

  useEffect(() => { 
    // aim at continental US centroid 
    globeEl.current.pointOfView({ lat: 39.6, lng: -98.5, altitude: 3}); 
    globeEl.current.controls().autoRotateSpeed = 0.5;

    let jsonData = require('./moon_landings.json');
    console.log(jsonData);
    setLandingSites(jsonData)
  }, []); 
  
  return (
    <div className='globeContainer'>
      <button onClick={onClick} >Mover solito</button>
      <ReactGlobe
        globeImageUrl={"//unpkg.com/globe.gl/example/moon-landing-sites/lunar_surface.jpg"}
        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
        options={options}
        height = {height}
        width={width}
        showGlobe={true}
        ref={globeEl}
        labelsData={landingSites}
        labelText="label"
        labelSize={1.7}
        labelDotRadius={0.4}
        labelDotOrientation={d => labelsTopOrientation.has(d.label) ? 'top' : 'bottom'}
        labelColor={d => colorScale(d.agency)}
        labelLabel={d => `
          <div><b>${d.label}</b></div>
          <div>${d.agency} - ${d.program} Program</div>
          <div>Landing on <i>${new Date(d.date).toLocaleDateString()}</i></div>
        `}
      />
    </div>
  )}

export default Globe