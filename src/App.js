import './App.css';
import React, { useState, useEffect } from 'react';
import Select from 'react-select'
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import { Map, Marker, GeoJson, GeoJsonLoader, Overlay } from "pigeon-maps"; 
import { Popover, Typography } from '@mui/material';
// import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

import Sa2API from './api/sa2.js'; 

function App() {
  const [cityOptions, setCityOptions] = useState([
    { value: "sydney", label: "Sydney", coords: [-33.8688, 151.2093]},
    { value: "newcastle", label: "Newcastle", coords: [-32.9280, 151.7816]},
    { value: "orange", label: "Orange", coords: [-33.8688, 151.2093]},
    { value: "tamworth", label: "Tamworth", coords: [-33.8688, 151.2093]},
    { value: "wagga", label: "Wagga Wagga", coords: [-33.8688, 151.2093]},
  ]);

  const [geodata, setGeoData] = useState([]); 

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

  const [formState, setFormState] = useState({
    coords: [-33.8688, 151.2093], 
    cityValue: "Sydney", 
    zoom: 11, 
    mark: [0,0], 
    rent: false, 
  }); 

  const [coor, setCoor] = useState([-33.8688, 151.2093]);
  const [zoom, setZoom] = useState(5);
  const [mark, setMark] = useState([0, 0]);
  const [geoJsonLinkG, setGeoJsonLinkG] = useState("");
  const [geoJsonLinkR, setGeoJsonLinkR] = useState("");
  const [geoJsonLinkO, setGeoJsonLinkO] = useState("");

  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const divRef = React.useRef();

  const handleClickOpen = () => {
    setOpen(true);
    setAnchorEl(divRef.current);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    Sa2API.getCities().then((res) => {
      setCityOptions(res); 
    }); 
  }, []);

  const setAll = () => {
    setCoor(formState.coords);
    setZoom(formState.zoom);
    setMark(formState.mark);
    Sa2API.getStatsByLoc(formState.cityValue).then((res) => {
      setGeoData(res); 
    })
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
          <Map height={300}
            defaultCenter={coor} defaultZoom={4} zoom={zoom} center={coor}>
            <GeoJsonLoader
              link={geoJsonLinkG}
              onClick={handleClickOpen}
              variant="contained"
              styleCallback={(feature, hover) =>
                hover
                  ? { fill: '#5BD82299', strokeWidth: '2'}
                  : { fill: '#9af66f99', strokeWidth: '1'}
              }
            />
            <GeoJsonLoader
              link={geoJsonLinkR}
              onClick={handleClickOpen}
              variant="contained"
              styleCallback={(feature, hover) =>
                hover
                  ? { fill: '#AE432C99', strokeWidth: '2'}
                  : { fill: '#ffc6b999', strokeWidth: '1'}
              }
            />
            <GeoJsonLoader
              link={geoJsonLinkO}
              onClick={handleClickOpen}
              variant="contained"
              styleCallback={(feature, hover) =>
                hover
                  ? { fill: '#a79c1c99', strokeWidth: '2'}
                  : { fill: '#fff15b99', strokeWidth: '1'}
              }
            />
            <Marker width={50} anchor={mark} />
            <Overlay>
            <Popover
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 85,
                horizontal: "center"
              }}
              transformOrigin={{
                horizontal: "center"
              }}
            >
              <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
            </Popover>
            </Overlay>
          </Map>
          {/* <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">{"Location Name Here"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Stats/Info here.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button onClick={handleClose} color="primary" autoFocus>
                Okay
              </Button>
            </DialogActions>
          </Dialog> */}
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
            onChange={(event) => {setFormState({...formState, coords: event.coords});}}
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

export default App;
