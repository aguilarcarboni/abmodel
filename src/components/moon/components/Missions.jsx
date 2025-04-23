import {useEffect, useRef, useState} from 'react'
import * as d3 from "d3-scale"
import useWindowDimensions from '../../../hooks/useWindowDimensions';
import ReactGlobe from 'react-globe.gl';
import LoadingPage from '../../LoadingPage';

function Missions() {


  const [quakes, setQuakes] = useState([])
  const colorScale = d3.scaleOrdinal(['#64b5f6', '#1e88e5', '#0d47a1', '#e3f2fd']);

  const options = {
    focusAnimationDuration: 2000,
    focusEasingFunction: ['Linear', 'None'],
    ambientLightColor: 'white',
  };

  const {height, width} = useWindowDimensions()
  const globeEl = useRef(undefined);
  const [activePoint, setActivePoint] = useState([])

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

  const [landingSites, setLandingSites] = useState([])
  const [activeFilters, setActiveFilters] = useState(new Array(filters.length).fill(true));
  const [loading, setLoading] = useState(true)

  function onGlobeReady() {
    setLoading(false);
  }

  function onPointClick(d) {
    if (activePoint.length === 0) {
      globeEl.current.pointOfView({lat: d.lat, lng: d.lng, altitude: 1})
      setActivePoint(activePoint => [...activePoint, d]);
    } else {
      globeEl.current.pointOfView({lat: d.lat, lng: d.lng, altitude: 3})
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
    globeEl.current.pointOfView({ lat: 25, lng: 0, altitude: 3}); 

    // set globe settings
    globeEl.current.controls().autoRotateSpeed = 0.5;

    // populate data array
    let jsonData = require('../assets/moon_landings.json');
    setLandingSites(jsonData)

  },[])
  
  const landingSitesData = [...landingSites].map((element) => ({
    label: element.label,
    lat: element.lat,
    lng: element.lng,
    agency: element.agency,
    program: element.program,
    date: element.date,
    url: element.url
  }));

  
  return (
    <>
      <LoadingPage showLoadingPage={loading}/>
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
      {activePoint.length !== 0 ? 
      <div className='popup'>
          {activePoint.map((el,index)=> (
            <div key={index}>
              <p className='subtitle'>{el.label}</p>
              <p className='subtitle'>Agency: {el.agency}</p>
              <p className='subtitle'>Program: {el.program}</p>
              <p className='subtitle'>Date: {el.date}</p>
              <a href={el.url} className='subtitle'>Visit Mission</a>
            </div>
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
        animateIn={true}
        waitForGlobeReady={true}
        onGlobeReady={onGlobeReady}

        pointsData={landingSitesData}
        labelSize={1.7}
        pointRadius={1}
        pointAltitude={0.01}
        pointColor={d => colorScale(d.agency)}
        pointLabel={d => `
          <div style="
            padding: 8px 12px;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          ">
            <div style="
              color: #fff;
              font-size: 14px;
              font-weight: 500;
              letter-spacing: 0.5px;
            ">
              ${d.label}
            </div>
            <div style="
              color: #64b5f6;
              font-size: 12px;
              margin-top: 4px;
            ">
              Agency: ${d.agency}
            </div>
          </div>
        `}
        onPointClick = {d => onPointClick(d)}
      />
    </div>
    </>
  )
}

export default Missions;