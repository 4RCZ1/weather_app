import React,{useEffect} from 'react';
import axios from 'axios';

import Temperature from "./WeatherData/Temperature";
import Type from "./WeatherData/Type";
import DayNightCycle from "./WeatherData/DayNightCycle";

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

const WeatherFetcher = ({coordinates}:Coordinates) => {
    const [weather, setWeather] = React.useState<Weather | null>(null);
    const [location, setLocation] = React.useState<Location | null>(null);

    const coords : string = coordinates ? coordinates[1] + ',' + coordinates[0] : "";
    const options = {
        method: 'GET',
        url: 'https://community-open-weather-map.p.rapidapi.com/weather',
        params: {
            lat: coordinates[1]+'',
            lon: coordinates[0]+'',
            lang: 'null',
            units: 'metric'
        },
        headers: {
            'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
            'x-rapidapi-key': 'b8b2181fd2msh07e26d6d3baa0a8p1c4db0jsn8a4d18cb50d4'
        }
    };

    useEffect(() => {
        // @ts-ignore
        axios(options).then(response => {
            console.log(response);
            setWeather({
                temp: response.data.main.temp,
                feels_like: response.data.main.feels_like,
                humidity: response.data.main.humidity,
                pressure: response.data.main.pressure,
                clouds: response.data.clouds,
                weather: response.data.weather[0],
                wind: response.data.wind,
                sunrise: response.data.sys.sunrise,
                sunset: response.data.sys.sunset
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
                    <DayNightCycle sunset={weather.sunset} sunrise={weather.sunrise}/>
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
