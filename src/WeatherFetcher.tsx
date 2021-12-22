import React,{useEffect} from 'react';
import axios from 'axios';

interface Weather {
    temp_c: number;
    temp_f: number;
    wind_kph: number;
    wind_dir: string;
    condition: {
        text: string;
        icon: string;
    };
}
interface Location {
    localtime: string;
    country: string;
    name: string;
    region: string;
    lat: number;
    lon: number;
}

interface Coordinates {
    coordinates: Array<number>;
}

const WeatherFetcher = ({coordinates}:Coordinates) => {
    const [weather, setWeather] = React.useState<Weather | null>(null);
    const [location, setLocation] = React.useState<Location | null>(null);

    const coords : string = coordinates ? coordinates[1] + ',' + coordinates[0] : "";
    let options = {
        method: 'GET',
        url: 'https://weatherapi-com.p.rapidapi.com/current.json',
        params: {q: coords},
        headers: {
            'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com',
            'x-rapidapi-key': 'b8b2181fd2msh07e26d6d3baa0a8p1c4db0jsn8a4d18cb50d4'
        }
    };

    useEffect(() => {
        // @ts-ignore
        axios(options).then(response => {
            console.log(response.data);
            setWeather(response.data.current);
            setLocation(response.data.location);
        }).catch(error => {
            console.log(error);
        });
    }, [options]);

    const weatherOutput = () => {
        if (weather && location && coordinates) {
            return (
                <div>
                    <h1>Weather in {location.name}</h1>
                    <p>Temperature: {weather.temp_c}&deg;C</p>
                    <p>Wind: {weather.wind_kph} kph, direction {weather.wind_dir}</p>
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
