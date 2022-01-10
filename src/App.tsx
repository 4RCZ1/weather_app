import React, {useState} from 'react';
import Coordinates from "./Modules/Coordinates";
import WeatherFetcher from "./Modules/WeatherFetcher";

function App() {
    const [coordinates, setCoordinates] = useState<number[] | null>(null);
    console.log("render");
    let lowerModule;
    if(coordinates === null){
        lowerModule = <div>Click on the map to select coordinates, or allow geolocation on this website</div>
    }else(
        lowerModule = <WeatherFetcher coordinates={coordinates}/>
    )
    return (
        <div className="App">
            <Coordinates setter={setCoordinates}/>
            {lowerModule}
        </div>
  );
}

export default App;
