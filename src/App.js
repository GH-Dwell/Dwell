import './App.css';
import React, { PureComponent, useState } from 'react';
import Select from 'react-select'
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import { Map, Marker, GeoJsonLoader } from "pigeon-maps"
// import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';

import Sa2API from './api/sa2.js'; 

function App() {
  const cityOptions = [
    { value: "sydney", label: "Sydney"},
    { value: "newcastle", label: "Newcastle"},
    { value: "orange", label: "Orange"},
    { value: "tamworth", label: "Tamworth"},
    { value: "wagga", label: "Wagga Wagga"},
  ];

  const ageOptions = [
    { value: "21-30", label: "21-30"},
    { value: "31-40", label: "31-40"},
    { value: "41-50", label: "41-50"},
    { value: "51-60", label: "51-60"},
  ];

  const incomeOptions = [
    { value: "500-999", label: "500-999"},
    { value: "1000-1999", label: "1000-1999"},
    { value: "2000-2999", label: "2000-2999"},
    { value: "3000-3999", label: "3000-3999"},
  ];

  const [coor, setCoor] = useState([-33.8688, 151.2093]);
  const [zoom, setZoom] = useState(5);
  const [mark1, setMark1] = useState([0, 0]);
  const [rent, setRent] = useState(false);
  const [geoJsonLinkG, setGeoJsonLinkG] = useState("");
  const [geoJsonLinkR, setGeoJsonLinkR] = useState("");
  const [geoJsonLinkO, setGeoJsonLinkO] = useState("");


  const setAll = () => {
    setCoor([-33.8688, 151.2093]);
    setZoom(11);
    setMark1([-33.8688, 151.2093]);
    // setGeoJsonLink(["https://raw.githubusercontent.com/codeforgermany/click_that_hood/main/public/data/sydney.geojson"]);
    setGeoJsonLinkG(["https://raw.githubusercontent.com/GH-Dwell/Dwell/master/src/mock/sydney_green.geojson"]);
    setGeoJsonLinkR(["https://raw.githubusercontent.com/GH-Dwell/Dwell/master/src/mock/sydney_red.geojson"]);
    setGeoJsonLinkO(["https://raw.githubusercontent.com/GH-Dwell/Dwell/master/src/mock/sydney_orange.geojson"]);
  }

  return (
    <div className="App">
      <div>
        <div className='app-header'>
          <h1>Dwell</h1>
        </div>
        <div className='app-map'>
        {/* <MapContainer 
          // style={{height: '50vh', width: '50wh'}}
          center={coor}
          zoom={zoom}
          scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={mark1}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer> */}
          <Map height={300}
            defaultCenter={coor} defaultZoom={4} zoom={zoom} center={coor}>
            <GeoJsonLoader
              link={geoJsonLinkG}
              styleCallback={(feature, hover) =>
                hover
                  ? { fill: '#5BD82299', strokeWidth: '2'}
                  : { fill: '#9af66f99', strokeWidth: '1'}
              }
            />
            <GeoJsonLoader
              link={geoJsonLinkR}
              styleCallback={(feature, hover) =>
                hover
                  ? { fill: '#AE432C99', strokeWidth: '2'}
                  : { fill: '#ffc6b999', strokeWidth: '1'}
              }
            />
            <GeoJsonLoader
              link={geoJsonLinkO}
              styleCallback={(feature, hover) =>
                hover
                  ? { fill: '#a79c1c99', strokeWidth: '2'}
                  : { fill: '#fff15b99', strokeWidth: '1'}
              }
            />
            <Marker width={50} anchor={mark1} />
          </Map>
        </div>
        <div className='app-body'>
          <p></p>
          <Select
            options={ageOptions}
            placeholder="Select a Age Group"
          />
          <p></p>
          <Select
            options={incomeOptions}
            placeholder="Select Weekly Income"
          />
          <p></p>
          <Select
            options={cityOptions}
            placeholder="Select a Work Location"
          />
          <p></p>
          <Switch
            // checked={checked}
            // onChange={handleChange}
            inputProps={{ 'aria-label': 'controlled' }}
          />
          <span style={{color:'#f1f1f1'}}>Buy / Rent</span>
          <p></p>
          <Button variant="contained" onClick={setAll}>Search</Button>
          <p/><p/><p/><p/>
        </div>
      </div>
  </div>
  );
}

// class App extends PureComponent {
//   render() {
//     // create an array with marker components
//     // const LeafletMarkers = markers.map((marker) => (
//     const LeafletMarkers = () => (
//       <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
//       <TileLayer
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//       />
//       <Marker position={[51.505, -0.09]}>
//         <Popup>
//           A pretty CSS3 popup. <br /> Easily customizable.
//         </Popup>
//       </Marker>
//     </MapContainer>
//     );

//     const test = () => (
//       <p>Test</p>
//     )

//     return (
//       <div className="map">
//           {LeafletMarkers}
//       </div>
//     );
//   }
// }

export default App;
