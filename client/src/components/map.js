import React,{ useState } from 'react'
import MapGL, {GeolocateControl } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

const TOKEN="pk.eyJ1IjoiYzNzYXIyMDciLCJhIjoiY2s1d3B6amViMXh5eDNrbWpjZWVqc3NqYSJ9.7vsEQ9O8osBtO9wdggls7Q"

const geolocateStyle = {
  float: 'left',
  margin: '50px',
  padding: '10px'
};

const Map = () => {

  const [viewport, setViewPort ] = useState({
    width: "100%",
    height: 900,
    latitude: 0,
    longitude: 0,
    zoom: 2,  
  })

  const _onViewportChange = viewport => setViewPort({...viewport, transitionDuration: 3000 })
  
  return (
    <div style={{ margin: '0 auto'}}>
      <h1 style={{textAlign: 'center', fontSize: '25px', fontWeight: 'bolder' }}>GeoLocator: Click To Find Your Location or click <a href="/search">here</a> to search for a location</h1>
      <MapGL
        {...viewport}
        mapboxApiAccessToken={TOKEN}
        mapStyle="mapbox://styles/mapbox/streets-v10"
        onViewportChange={_onViewportChange}
      >
        <GeolocateControl
          style={geolocateStyle}
          positionOptions={{enableHighAccuracy: true}}
          trackUserLocation={true}
        />
      </MapGL>
    </div>
  )
}

export default Map

