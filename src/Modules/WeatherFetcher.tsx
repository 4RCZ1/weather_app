import React,{useEffect} from 'react';
import axios from 'axios';

import Temperature from "./WeatherData/Temperature";
import Type from "./WeatherData/Type";
import DayNightCycle from "./WeatherData/DayNightCycle";
import {RESPONSE_1} from "./WeatherData/Mocks";
import TimeFetcher from "./TimeFetcher";


interface Weather {
    temp: number;
    feels_like: number;
    pressure: number;
    humidity: number;
    clouds: number;
    weather: {
        description: string;
        icon: string;
    };
    wind: {
        speed: number;
        deg: number;
    };
}
interface Location {
    name: string;
    country: string;
    lat: number;
    lon: number;
}

interface Coordinates {
    coordinates: number[];
}

const correctCoordinates = (coordinates: number): number => {
    if (Math.abs(coordinates) > 180) {
        coordinates = coordinates - 360;
    }
    return coordinates;
}

const WeatherFetcher = ({coordinates}:Coordinates) => {
    const [weather, setWeather] = React.useState<Weather | null>(null);
    const [location, setLocation] = React.useState<Location | null>(null);
    //const [lastRequestTimestamp, setLastRequestTimestamp] = React.useState<number>(0);

    const coords : string = correctCoordinates(coordinates[1])+','+correctCoordinates(coordinates[0]);
    const options = {
        method: 'GET',
        url: 'https://weatherapi-com.p.rapidapi.com/current.json',
        params: {q: coords},
        headers: {
            'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com',
            'x-rapidapi-key': '0bedbfb065msh4d74772935f4250p1f5b5cjsn0208d1ba7eb7'
        }
    };

    useEffect(() => {
        //if(Date.now() - lastRequestTimestamp > 1000*30) {
            // @ts-ignore
            axios(options).then(response => {
                console.log(response.data);
                //setLastRequestTimestamp(Date.now());
                setWeather(
                    {
                        temp: response.data.current.temp_c,
                        feels_like: response.data.current.feelslike_c,
                        pressure: response.data.current.pressure_mb,
                        humidity: response.data.current.humidity,
                        clouds: response.data.current.cloud,
                        weather: {
                            description: response.data.current.condition.text,
                            icon: response.data.current.condition.icon,
                        },
                        wind: {
                            speed: response.data.current.wind_kph,
                            deg: response.data.current.wind_degree,
                        },
                    }
                );
                setLocation(
                    {
                        name: response.data.location.name,
                        country: response.data.location.country,
                        lat: response.data.location.lat,
                        lon: response.data.location.lon,
                    }
                );
            }).catch(error => {
                console.log(error);
            });
       // }
    }, [coordinates]);

    const weatherOutput = () => {
        if (weather && location && coordinates) {
            return (
                <div id={"weather"}>
                    <h1>Najbliższy punkt pomiaru: {location.name}</h1>
                    <h2>Kraj: {location.country}</h2>
                    <Temperature temp={weather.temp} feels_like={weather.feels_like} />
                    <h3>Wilgotność: {weather.humidity}%</h3>
                    <h3>Ciśnienie: {weather.pressure} hPa</h3>
                    <h3>Zachmurzenie: {weather.clouds}%</h3>
                    <Type type={weather.weather}/>
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
