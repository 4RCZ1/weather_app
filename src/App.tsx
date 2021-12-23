import React, {useState} from 'react';
import './App.css';
import Coordinates from "./Coordinates";
import WeatherFetcher from "./WeatherFetcher";

function App() {
    let defaultCoordinates : number[] = [0,0];
    const [coordinates, setCoordinates] = useState(defaultCoordinates);
    console.log("render");
    // const setCoordinates = (val : number[]) => {
    //     console.log(val);
    //     coordinates = val;
    // };
    return (
        <div className="App">
            <Coordinates setter={setCoordinates}/>
            <WeatherFetcher coordinates={coordinates}/>
        </div>
  );
}

export default App;
