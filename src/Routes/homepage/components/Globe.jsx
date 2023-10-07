import React, {useEffect, useRef} from 'react'
import useWindowDimensions from '../../../hooks/useWindowDimensions';

import ReactGlobe from 'react-globe.gl';

function Globe() {

  const {height, width} = useWindowDimensions()
  const globeEl = useRef(undefined);

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
      />
    </div>
  )}

export default Globe