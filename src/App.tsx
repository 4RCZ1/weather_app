import React, {useState, lazy, Suspense} from 'react';
import Coordinates from "./Modules/Coordinates";
import Header from "./Modules/Header";
import Footer from "./Modules/Footer";
import ScrollButton from "./Helpers/ScrollButton";
import {Coordinates as CoordinatesType} from "./Services/WeatherAPI";
import {Backdrop, CircularProgress} from "@mui/material";

const WeatherFetcher = lazy(() => import("./Modules/WeatherFetcher"));

function App() {
    const [coordinates, setCoordinates] = useState<CoordinatesType | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [units, setUnits] = useState<'C'|'F'>('C');
    return (
        <div id="app" className={'whiteMode'}>
            <Backdrop
                sx={(theme) => ({color: '#fff', zIndex: theme.zIndex.drawer + 1})}
                open={loading}
            >
                <CircularProgress color="inherit"/>
            </Backdrop>
            <Suspense fallback={<CircularProgress color="inherit"/>}>
                <Header units={units} setUnits={setUnits}/>
                <Coordinates setCoordinates={setCoordinates} setLoading={setLoading}/>
                {coordinates === null ?
                    <div>Click on the map to select coordinates, or allow geolocation on this website</div> :
                    <WeatherFetcher coordinates={coordinates} units={units} setLoading={setLoading}/>}
                <Footer/>
                {coordinates && <ScrollButton/>}
            </Suspense>
        </div>
    );
}

export default App;
