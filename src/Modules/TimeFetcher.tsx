import React, {useEffect} from 'react';
import axios from 'axios';
import DayNightCycle from "./WeatherData/DayNightCycle";

interface Time{
    moon_illumination: string;
    moon_phase: string;
    moonrise: string;
    moonset: string;
    sunrise: string;
    sunset: string;
}

const TimeFetcher = ({coords}:{coords:string}) => {
    const [time, timeSetter] = React.useState<Time | null>(null);

    const options = {
        method: 'GET',
        url: 'https://weatherapi-com.p.rapidapi.com/astronomy.json',
        params: {q: coords},
        headers: {
            'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com',
            'x-rapidapi-key': '0bedbfb065msh4d74772935f4250p1f5b5cjsn0208d1ba7eb7'
        }
    };

    useEffect (() => {
        // @ts-ignore
        axios.request(options).then(res => {
            console.log(res.data);
            timeSetter(
                {
                    moon_illumination: res.data.astronomy.astro.moon_illumination,
                    moon_phase: res.data.astronomy.astro.moon_phase,
                    moonrise: res.data.astronomy.astro.moonrise,
                    moonset: res.data.astronomy.astro.moonset,
                    sunrise: res.data.astronomy.astro.sunrise,
                    sunset: res.data.astronomy.astro.sunset
                }
            )
        }).catch(err => {
            console.log(err);
        });
    }, [coords]);

    return(
        <DayNightCycle sunrise={0} sunset={0} timezone={0}/>
    )
}

export default TimeFetcher;
