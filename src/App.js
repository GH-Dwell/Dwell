import './App.css';
import React, { useState } from 'react';
import Select from 'react-select'
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import { Map, Marker } from "pigeon-maps"

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
  const [mark, setMark] = useState([0, 0]);
  const [rent, setRent] = useState(false);

  return (
    <div className="App">
      <div>
        <div className='app-header'>
          <h1>Dwell</h1>
        </div>
        <div className='app-map'>
          <Map height={300} defaultCenter={coor} defaultZoom={11}>
            <Marker width={50} anchor={mark} />
            {/* <Marker width={50} anchor={[-33.8688, 151.2093]} /> */}
            {/* <Marker width={50} anchor={[-33.838634, 151.207114]} /> */}
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
          <Select
            options={incomeOptions}
            placeholder="Select Weekly Income"
          />
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
          <Button variant="contained" onClick={() => setMark([-33.8688, 151.2093])}>Search</Button>
        </div>
      </div>
  </div>
  );
}

export default App;
