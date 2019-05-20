import React from 'react';
import './App.css';
import Geolocated from './Components/Geolocated';
import GoogleMap from './Components/GoogleMap';

function App() {
  return (
    <div className="App">
      <Geolocated/>
      <GoogleMap/>
    </div>
  );
}

export default App;
