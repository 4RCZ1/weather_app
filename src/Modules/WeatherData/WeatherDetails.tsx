import React from "react";
import Temperature from "./Temperature";
import Type from "./Type";
import TimeFetcher from "../TimeFetcher";
import Wind from "./Wind";
import Details from "./Details";
import {Location, Weather, Coordinates} from "../../Services/WeatherAPI";

interface WeatherDetailsProps {
    weather: Weather;
    location: Location;
    coordinates: Coordinates;
    units: 'C' | 'F';
}

const WeatherDetails = ({weather, location, coordinates, units}: WeatherDetailsProps) => {
    console.info('WeatherDetails rendered')
    return (
        <div id={"weather"}>
            <div className="mainBoxes">
                <h1>Location: {location.name}</h1>
                <h2>Country: {location.country}</h2>
            </div>
            <Temperature temp={units === 'F' ? weather.temp_f : weather.temp}
                         feels_like={units === 'F' ? weather.feels_like_f : weather.feels_like} units={units}/>
            <Wind speed={weather.wind.speed} speed_mph={weather.wind.speed_mph} deg={weather.wind.deg}
                  gust={weather.wind.gust} gust_mph={weather.wind.gust_mph} units={units}/>
            <Type type={weather.weather}/>
            <Details humidity={weather.humidity} pressure={weather.pressure} clouds={weather.clouds}/>
            <TimeFetcher coordinates={coordinates}/>
        </div>
    );
};

export default WeatherDetails;