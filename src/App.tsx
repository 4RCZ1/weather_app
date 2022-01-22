import React, {useState} from 'react';
import Coordinates from "./Modules/Coordinates";
import WeatherFetcher from "./Modules/WeatherFetcher";
import Header from "./Modules/Header";
import Footer from "./Modules/Footer";

function App() {
    const [coordinates, setCoordinates] = useState<number[] | null>(null);
    const [units, setUnits] = useState<string>('C');
    console.log("render");
    let lowerModule;
    if(coordinates === null){
        lowerModule = <div>Click on the map to select coordinates, or allow geolocation on this website</div>
    }else(
        lowerModule = <WeatherFetcher coordinates={coordinates} units={units}/>
    )
    return (
        <div id="app" className={'whiteMode'}>
            <Header units={units} setUnits={setUnits}/>
            <Coordinates setter={setCoordinates}/>
            {lowerModule}
            <Footer/>
        </div>
  );
}

export default App;
