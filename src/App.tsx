import React, {useState, lazy, Suspense} from 'react';
import Coordinates from "./Modules/Coordinates";
//import WeatherDetails from "./Modules/WeatherDetails";
import Header from "./Modules/Header";
import Footer from "./Modules/Footer";
import ScrollButton from "./Helpers/ScrollButton";
import {Coordinates as CoordinatesType} from "./Services/WeatherAPI";

const WeatherFetcher = lazy(() => import("./Modules/WeatherDetails"));

function App() {
    const [coordinates, setCoordinates] = useState<CoordinatesType | null>(null);
    const [units, setUnits] = useState<string>('C');
    let lowerModule;
    if (coordinates === null) {
        lowerModule = <div>Click on the map to select coordinates, or allow geolocation on this website</div>
    } else (
        lowerModule = <WeatherFetcher coordinates={coordinates} units={units}/>
    )
    return (
        <div id="app" className={'whiteMode'}>
            <Suspense fallback={<div>Loading...</div>}>
                <Header units={units} setUnits={setUnits}/>
                <Coordinates setter={setCoordinates}/>
                {lowerModule}
                <Footer/>
                {coordinates && <ScrollButton/>}
            </Suspense>
        </div>
    );
}

export default App;
