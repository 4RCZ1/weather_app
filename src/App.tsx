import React, {useState} from 'react';
import Coordinates from "./Modules/Coordinates";
import WeatherFetcher from "./Modules/WeatherFetcher";
import Header from "./Modules/Header";
import Footer from "./Modules/Footer";

function App() {
    const [coordinates, setCoordinates] = useState<number[] | null>(null);
    const [unit, setUnit] = useState<string>('C');
    const [darkMode, setDarkMode] = useState<boolean>(false);
    console.log("render");
    let lowerModule;
    if(coordinates === null){
        lowerModule = <div>Click on the map to select coordinates, or allow geolocation on this website</div>
    }else(
        lowerModule = <WeatherFetcher coordinates={coordinates} unit={unit}/>
    )
    return (
        <div id="app" className={'whiteMode'}>
            <Header setDarkMode={setDarkMode} setUnit={setUnit}/>
            <Coordinates setter={setCoordinates}/>
            {lowerModule}
            <Footer/>
        </div>
  );
}

export default App;
