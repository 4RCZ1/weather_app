import React from 'react';
import './App.css';
import Coordinates from "./Coordinates";
import WeatherFetcher from "./WeatherFetcher";

function App() {
    let coordinates : number[] = [0,0];
    const setCoordinates = (val : number[]) => {
        coordinates = val;
    };
    return (
        <div className="App">
            <Coordinates setter={setCoordinates}/>
            <WeatherFetcher coordinates={coordinates}/>
        </div>
  );
}

export default App;
