import './App.css';
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
  
  return (
    <div className="App">
      <div>
        <div className='app-header'>
          <h1>Dwell</h1>
        </div>
        <div className='app-map'>
          <Map height={300} defaultCenter={[50.879, 4.6997]} defaultZoom={11}>
            <Marker width={50} anchor={[50.879, 4.6997]} />
          </Map>
        </div>
        <div className='app-body'>
          <Select
            options={stateOptions}
            placeholder="Select a State"
          />
          <p></p>
          <Select
            options={cityOptions}
            placeholder="Select a City"
          />
          <p></p>
          <Switch
            // checked={checked}
            // onChange={handleChange}
            inputProps={{ 'aria-label': 'controlled' }}
          />
          <p></p>
          <Button variant="contained">Search</Button>
        </div>
      </div>
  </div>
  );
}

export default App;
