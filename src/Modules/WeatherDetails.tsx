import React, {useEffect, useState} from 'react';
import axios from 'axios';

import Temperature from "./WeatherData/Temperature";
import Type from "./WeatherData/Type";
import TimeFetcher from "./TimeFetcher";
import Wind from "./WeatherData/Wind";
import {WEATHER} from "./WeatherData/Mocks";
import Details from "./WeatherData/Details";
import Modal from "../Helpers/Modal";
import {scrollToDetails} from "../Helpers/ScrollButton";
import WeatherAPI from "../Services/WeatherAPI";
import {Location, Weather, Coordinates} from "../Services/WeatherAPI";

interface weatherDetailsProps {
    coordinates: Coordinates;
    units: string;
}

const WeatherDetails = ({coordinates, units}: weatherDetailsProps) => {
        const [weather, setWeather] = React.useState<Weather | null>(null);
        const [location, setLocation] = React.useState<Location | null>(null);
        const [showModal, setShowModal] = useState(false);
        const [message, setMessage] = useState("");


        useEffect(() => {
            WeatherAPI.getWeather(coordinates, false).then(weatherData => {
                if (typeof weatherData === "string") {
                    setMessage(weatherData);
                    setShowModal(true);
                } else {
                    setWeather(weatherData.weather);
                    setLocation(weatherData.location);
                }
            });
        }, [coordinates]);

        const weatherOutput = () => {
            if (weather && location && coordinates) {
                return (
                    <div id={"weather"}>
                        <Modal showModal={showModal} setShowModal={setShowModal} buttonText={"Ok"} promptText={message}/>
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
            } else {
                return <p>Loading...</p>;
            }
        };

        return (
            <div>
                {weatherOutput()}
            </div>
        );
    }
;

export default WeatherDetails;
