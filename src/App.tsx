import React, {useState} from 'react';
import Coordinates from "./Coordinates";
import WeatherFetcher from "./WeatherFetcher";

function App() {
    const [coordinates, setCoordinates] = useState([0,0]);
    console.log("render");
    return (
        <div className="App">
            <Coordinates setter={setCoordinates}/>
            <WeatherFetcher coordinates={coordinates}/>
        </div>
  );
}

export default App;
