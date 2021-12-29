import React,{useEffect} from 'react';
import axios from 'axios';

import Temperature from "./WeatherData/Temperature";
import Type from "./WeatherData/Type";
import DayNightCycle from "./WeatherData/DayNightCycle";
import {RESPONSE_1} from "./WeatherData/Mocks";


interface Weather {
    temp: number;
    feels_like: number;
    pressure: number;
    humidity: number;
    clouds:{
        all: number;
    };
    weather: {
        description: string;
        icon: string;
    };
    wind: {
        speed: number;
        deg: number;
    };
    sunrise:number;
    sunset:number;
    timezone: number;
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
    const [lastRequestTimestamp, setLastRequestTimestamp] = React.useState<number>(0);

    const coords : string = coordinates ? coordinates[1] + ',' + coordinates[0] : "";
    const options = {
        method: 'GET',
        url: 'https://community-open-weather-map.p.rapidapi.com/weather',
        params: {
            lat: correctCoordinates(coordinates[1])+'',
            lon: correctCoordinates(coordinates[0])+'',
            lang: 'null',
            units: 'metric'
        },
        headers: {
            'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
            'x-rapidapi-key': '0bedbfb065msh4d74772935f4250p1f5b5cjsn0208d1ba7eb7'
        }
    };

    useEffect(() => {
        //if(Date.now() - lastRequestTimestamp > 1000*30) {
            // @ts-ignore
            axios(options).then(response => {
                console.log(response.data);
                setLastRequestTimestamp(Date.now());
                setWeather({
                    temp: response.data.main.temp,
                    feels_like: response.data.main.feels_like,
                    humidity: response.data.main.humidity,
                    pressure: response.data.main.pressure,
                    clouds: response.data.clouds,
                    weather: response.data.weather[0],
                    wind: response.data.wind,
                    sunrise: response.data.sys.sunrise,
                    sunset: response.data.sys.sunset,
                    timezone: response.data.timezone
                });
                setLocation({
                    country: response.data.sys.country,
                    name: response.data.name,
                    lat: response.data.coord.lat,
                    lon: response.data.coord.lon
                });
            }).catch(error => {
                console.log(error);
            });
       // }

        //     setWeather(
        //         {
        //             temp: RESPONSE_1.main.temp,
        //             feels_like: RESPONSE_1.main.feels_like,
        //             humidity: RESPONSE_1.main.humidity,
        //             pressure: RESPONSE_1.main.pressure,
        //             clouds: RESPONSE_1.clouds,
        //             weather: RESPONSE_1.weather[0],
        //             wind: RESPONSE_1.wind,
        //             sunrise: RESPONSE_1.sys.sunrise,
        //             sunset: RESPONSE_1.sys.sunset,
        //             timezone: RESPONSE_1.timezone
        //         }
        //     );
        //     setLocation(
        //         {
        //             country: RESPONSE_1.sys.country,
        //             name: RESPONSE_1.name,
        //             lat: RESPONSE_1.coord.lat,
        //             lon: RESPONSE_1.coord.lon
        //         }
        //     );
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
                    <h3>Zachmurzenie: {weather.clouds.all}%</h3>
                    <Type type={weather.weather}/>
                    <DayNightCycle sunset={weather.sunset} sunrise={weather.sunrise} timezone={weather.timezone}/>
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
