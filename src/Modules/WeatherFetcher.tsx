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


interface Weather {
    temp: number;
    temp_f: number;
    feels_like: number;
    feels_like_f: number;
    pressure: number;
    humidity: number;
    clouds: number;
    weather: {
        description: string;
        icon: string;
    };
    wind: {
        speed: number;
        speed_mph: number;
        deg: number;
        gust: number;
        gust_mph: number;
    };
}

interface Location {
    name: string;
    country: string;
    lat: number;
    lon: number;
}

interface weatherFetcherProps {
    coordinates: number[];
    units: string;
}

const correctCoordinates = (coordinates: number): number => {
    while (coordinates > 180) {
        coordinates = coordinates - 360;
    }
    while (coordinates < -180) {
        coordinates = coordinates + 360;
    }
    return coordinates;
}

const WeatherFetcher = ({coordinates, units}: weatherFetcherProps) => {
    const [weather, setWeather] = React.useState<Weather | null>(null);
    const [location, setLocation] = React.useState<Location | null>(null);
    const [showModal, setShowModal] = useState(false);
    const [message, setMessage] = useState("xd");

    const coords: string = correctCoordinates(coordinates[1]) + ',' + correctCoordinates(coordinates[0]);
    const options = {
        method: 'GET',
        url: 'https://weatherapi-com.p.rapidapi.com/current.json',
        params: {q: coords},
        headers: {
            'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com',
            'x-rapidapi-key': '0bedbfb065msh4d74772935f4250p1f5b5cjsn0208d1ba7eb7'
        }
    };

    const isMock = async (mock: boolean) => {
        if (mock) {
            return WEATHER;
        }
        let response;
        // @ts-ignore
        await axios.request(options).then(res => {
            response = res.data;
            scrollToDetails();
        }).catch(err => {
            console.log(err);
            setShowModal(true);
            if(err.response){
                setMessage(err.response.data.error.message);
            }else{
                setMessage("Something went wrong");
            }

        });
        return response;
    };

    useEffect(() => {
        isMock(false).then(data => {
            if(data){
                setWeather(
                    {
                        temp: data.current.temp_c,
                        temp_f: data.current.temp_f,
                        feels_like: data.current.feelslike_c,
                        feels_like_f: data.current.feelslike_f,
                        pressure: data.current.pressure_mb,
                        humidity: data.current.humidity,
                        clouds: data.current.cloud,
                        weather: {
                            description: data.current.condition.text,
                            icon: data.current.condition.icon,
                        },
                        wind: {
                            speed: data.current.wind_kph,
                            speed_mph: data.current.wind_mph,
                            deg: data.current.wind_degree,
                            gust: data.current.gust_kph,
                            gust_mph: data.current.gust_mph,
                        },
                    }
                );
                setLocation(
                    {
                        name: data.location.name,
                        country: data.location.country,
                        lat: data.location.lat,
                        lon: data.location.lon,
                    }
                );
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
                    <TimeFetcher coords={coords}/>
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
};

export default WeatherFetcher;
