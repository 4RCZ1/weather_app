import React, {useEffect, useState, memo} from 'react';


import WeatherAPI from "../Services/WeatherAPI";
import {Location, Weather, Coordinates} from "../Services/WeatherAPI";
import WeatherDetails from "./WeatherData/WeatherDetails";
import Modal from "../Helpers/Modal";

interface weatherDetailsProps {
    coordinates: Coordinates;
    units: 'C' | 'F';
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const WeatherFetcher = ({coordinates, units, setLoading}: weatherDetailsProps) => {
        const [weather, setWeather] = React.useState<Weather | null>(null);
        const [location, setLocation] = React.useState<Location | null>(null);
        const [showModal, setShowModal] = useState(false);
        const [message, setMessage] = useState("");

        useEffect(() => {
            console.log('trigger', weather, location, showModal, message)
            setLoading(true);
            WeatherAPI.getWeather(coordinates, false).then(weatherData => {
                if (typeof weatherData === "string") {
                    setMessage(weatherData);
                    setShowModal(true);
                } else {
                    setWeather(weatherData.weather);
                    setLocation(weatherData.location);
                }
                setLoading(false);
            });
        }, [coordinates]);

        useEffect(() => {
            const element = document.getElementById("weather");
            console.log(element)
            if (element) {
                console.log("scrolling")
                element.scrollIntoView({behavior: "smooth"})
            }
        }, [weather]);

        return weather && location && coordinates ? (<>
            <Modal showModal={showModal} setShowModal={setShowModal} buttonText={"Ok"} promptText={message}/>
            <WeatherDetails weather={weather} location={location} coordinates={coordinates} units={units}/>
        </>) : null;
    }
;

export default memo(WeatherFetcher, (prevProps, nextProps) => {
    return prevProps.coordinates[0] === nextProps.coordinates[0] && prevProps.coordinates[1] === nextProps.coordinates[1] && prevProps.units === nextProps.units;
});
