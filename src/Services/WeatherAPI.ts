import {WEATHER} from "../Modules/WeatherData/Mocks";
import axios from "axios";

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

type WeatherAPIResponse = {
    weather: Weather;
    location: Location;
};

type Coordinates = [longitude: number, latitude: number];

class WeatherAPI {
    static getWeather = async (coordinates: Coordinates, mock?: boolean): Promise<WeatherAPIResponse | string> => {

        const coords: string = coordinates[1] + ',' + coordinates[0];
        const options = {
            method: 'GET',
            url: 'https://weatherapi-com.p.rapidapi.com/current.json',
            params: {q: coords},
            headers: {
                'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com',
                'x-rapidapi-key': '0bedbfb065msh4d74772935f4250p1f5b5cjsn0208d1ba7eb7'
            }
        };

        try {
            const data = mock ? WEATHER : (await axios.request(options)).data;
            const weather: Weather = {
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
            const location: Location = {
                name: data.location.name,
                country: data.location.country,
                lat: data.location.lat,
                lon: data.location.lon,
            }
            return {weather, location};
        } catch (err: any) {
            if (err.response) {
                return err.response.data.error.message;
            } else {
                return "Something went wrong";
            }
        }
    };
}

export default WeatherAPI;
export type {Weather, Location, Coordinates, WeatherAPIResponse};