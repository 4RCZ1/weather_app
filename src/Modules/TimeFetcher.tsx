import React, {useEffect} from 'react';
import axios from 'axios';
import DayNightCycle from "./WeatherData/DayNightCycle";

interface Time{
    moon_illumination: number;
    moon_phase: number;
    moonrise: number;
    moonset: number;
    sunrise: number;
    sunset: number;
    localtime_epoch:number;
    timeDifference:string;
}

const convertTime = (time: number) => {
    return Math.floor(Date.parse(new Date().toDateString() + ' ' + time)/1000);
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
                    moon_illumination: convertTime(res.data.astronomy.astro.moon_illumination),
                    moon_phase: convertTime(res.data.astronomy.astro.moon_phase),
                    moonrise: convertTime(res.data.astronomy.astro.moonrise),
                    moonset: convertTime(res.data.astronomy.astro.moonset),
                    sunrise: convertTime(res.data.astronomy.astro.sunrise),
                    sunset: convertTime(res.data.astronomy.astro.sunset),
                    localtime_epoch: res.data.location.localtime_epoch,
                    timeDifference: res.data.location.localtime
                }
            )
        }).catch(err => {
            console.log(err);
        });
    }, [coords]);

    if(time === null) return <div>Loading...</div>;
    const timeDifference = Math.floor(Date.parse(time.timeDifference)/1000) - time.localtime_epoch;
    return(
        <DayNightCycle sunrise={time.sunrise} sunset={time.sunset} localtime_epoch={Math.floor(Date.parse(time.timeDifference)/1000)} timeDifference={timeDifference}/>
    )
}

export default TimeFetcher;
