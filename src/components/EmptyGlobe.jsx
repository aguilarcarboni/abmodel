import React, {useEffect, useRef} from 'react'
import useWindowDimensions from '../hooks/useWindowDimensions';
import ReactGlobe from 'react-globe.gl';

function Globe() {

  const {height, width} = useWindowDimensions()
  const globeEl = useRef(undefined);

  useEffect(() => { 
    // aim at continental US centroid 
    globeEl.current.pointOfView({ lat: 39.6, lng: -98.5, altitude: 3}); 
    globeEl.current.controls().autoRotateSpeed = 0.5;
    globeEl.current.controls().enableZoom = false;
    globeEl.current.controls().enableRotate = false;
  }, []); 
  
  return (
    <div className='globeContainer'>
      <ReactGlobe
        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
        backgroundColor = "#000000"
        height = {height}
        width={width}
        showGlobe={false}
        showAtmosphere={false}
        ref={globeEl}
      />
    </div>
  )}

export default Globe