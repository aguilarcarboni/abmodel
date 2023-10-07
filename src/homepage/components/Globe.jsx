import React from 'react'
import ReactGlobe from 'react-globe.gl';
import useWindowDimensions from '../../hooks/useWindowDimensions';

function Globe() {

  const {height, width} = useWindowDimensions()

  const options = {
    cameraRotateSpeed: 0.5,
    focusAnimationDuration: 2000,
    focusEasingFunction: ['Linear', 'None'],
    pointLightIntensity: 0,
    globeGlowColor: 'blue',
  };

  console.log(height, width)
  
  return (
      <ReactGlobe
        globeImageUrl={"//unpkg.com/globe.gl/example/moon-landing-sites/lunar_surface.jpg"}
        backgroundColor='black'
        //backgroundImageUrl={'https://t4.ftcdn.net/jpg/02/15/94/83/360_F_215948377_kgIhNUy4X0iYsyUfYd9KKIViSPOxclbC.jpg'}
        options={options}
        height = {height/1.5}
        width={width/1.5} 
      />
  )}
export default Globe