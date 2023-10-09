import React, {useEffect, useRef, useState} from 'react'
import useWindowDimensions from '../../../hooks/useWindowDimensions';
import * as d3 from "d3-scale"
import ReactGlobe from 'react-globe.gl';
import { globeState } from '../../../types/types'

function Globe({globeIsReady}) {
  const {height, width} = useWindowDimensions()
  const globeEl = useRef(undefined);

  const filters = [
    {
      name: 'Points',
    },
    {
      name: 'Rings',
    },
    {
      name: 'Heatmap',
    },
  ]

  const [quakes, setQuakes] = useState([])
  const [state, setState] = useState(globeState.POINTS)
  const [activeFilters, setActiveFilters] = useState(
    new Array(3).fill(true)
  );

  const colorScale = d3.scaleOrdinal(['orangered', 'mediumblue', 'darkgreen', 'yellow']);

  const options = {
    focusAnimationDuration: 2000,
    focusEasingFunction: ['Linear', 'None'],
    ambientLightColor: 'white',
  };

  function onGlobeReady() {
    globeIsReady();
  }

  useEffect(() => {
  const handleOnChange = (position) => {
    const updatedCheckedState = activeFilters.map((item, index) =>
      index === position ? !item : item
    );
    setActiveFilters(updatedCheckedState);
  };

  useEffect(() => {
    // set viewport settings
    globeEl.current.pointOfView({ lat: 39.6, lng: -98.5, altitude: 3}); 

    // set globe settings
    globeEl.current.controls().autoRotateSpeed = 0.5;

    // populate data array
    let jsonData = require('../assets/superficial_moonquake_locations.json')
    setQuakes(jsonData)
  },[])

  const pointsData = [...quakes].map((element, index) => ({
    label: element.label,
    lat: element.lat,
    lng: element.lng,
    magnitude: element.magnitude,
    year: element.year,
    day: element.day,
    hour: element.hour,
    minute: element.minute,
    second: element.second
  }));


  const ringsData = [...quakes].map((element, index) => ({
    label: element.label,
    lat: element.lat,
    lng: element.lng,
    magnitude: element.magnitude,
    year: element.year,
    day: element.day,
    hour: element.hour,
    minute: element.minute,
    second: element.second,
    maxR: 20,
    propagationSpeed: 20,
  }))

  return (
    <div className='globeContainer'>
      <div className='filtersContainer'>
        {filters.map((el, index) => (
          <div key = {index} className='button'>
            <label>{el.name}: </label>
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
        animateIn={true}
        waitForGlobeReady={true}
        onGlobeReady={onGlobeReady}

        pointsData={activeFilters[0] ? pointsData:[]}
        labelSize={1.7}
        pointRadius={1}
        pointAltitude={0}
        pointColor={d => colorScale(d.agency)}
        pointLabel={d => `<div><b>${d.label}</b></div>`}

        ringsData={activeFilters[1] ? ringsData:[]}
        ringColor={d => colorScale(d.agency)}
        ringMaxRadius = {d => d.magnitude * 2}
        ringPropagationSpeed = {d => d.magnitude}
      />
    </div>
  )}

export default Globe