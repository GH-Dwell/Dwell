import './App.css';
import React, { useState } from 'react';
import Select from 'react-select'
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import { Map, Marker } from "pigeon-maps"
// import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';

function App() {
  const stateOptions = [
    { value: "nsw", label: "NSW" },
    { value: "qld", label: "QLD" },
    { value: "wa", label: "WA" },
    { value: "sa", label: "SA" },
    { value: "vic", label: "VIC" },
  ];

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

  const setAll = () => {
    setCoor([-33.8688, 151.2093]);
    setZoom(11);

    setMark1([-33.8688, 151.2093]);
    // setMark2([-33.8688, 151.2093]);
    // setMark3([-33.8688, 151.2093]);
    // setMark4([-33.8688, 151.2093]);
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
            <Marker width={50} anchor={mark1} />
          </Map>
        </div>
        <div className='app-body'>
          {/* <Select
            options={stateOptions}
            placeholder="Select a State"
          /> */}
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
          {/* <span style={{paddingLeft:'2em'}}>{rent ? "Buy" : "Rent"}</span> */}
          <p></p>
          <Button variant="contained" onClick={setAll}>Search</Button>
          <p/><p/><p/><p/>
        </div>
      </div>
  </div>
  );
}

export default App;
