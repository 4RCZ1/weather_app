import React,{useEffect} from 'react';
import axios from 'axios';

import Temperature from "./WeatherData/Temperature";
import Type from "./WeatherData/Type";
import TimeFetcher from "./TimeFetcher";
import Wind from "./WeatherData/Wind";
import {WEATHER} from "./WeatherData/Mocks";


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
        gust: number;
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
            //axios(options).then(response => {
                //const data = response.data;
                const data = WEATHER;
                setWeather(
                    {
                        temp: data.current.temp_c,
                        feels_like: data.current.feelslike_c,
                        pressure: data.current.pressure_mb,
                        humidity: data.current.humidity,
                        clouds: data.current.cloud,
                        weather: {
                            description: data.current.condition.text,
                            icon: data.current.condition.icon,
                        },
                        wind: {
                            speed: data.current.wind_kph,
                            deg: data.current.wind_degree,
                            gust: data.current.gust_kph,
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
            // }).catch(error => {
            //     console.log(error);
            // });
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
                    <Wind speed={weather.wind.speed} deg={weather.wind.deg} gust={weather.wind.gust}/>
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
