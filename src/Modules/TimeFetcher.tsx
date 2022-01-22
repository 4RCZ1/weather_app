import React, {useEffect} from 'react';
import axios from 'axios';
import DayNightCycle from "./WeatherData/DayNightCycle";
import {ASTRONOMY} from "./WeatherData/Mocks";

interface Time {
    moon_illumination: number;
    moon_phase: string;
    moonrise: number;
    moonset: number;
    sunrise: number;
    sunset: number;
    localtime_epoch: number;
    localtime: string;
}

const convertTime = (time: string) => {
    return Math.floor(Date.parse(new Date().toDateString() + ' ' + time) / 1000);
}

const TimeFetcher = ({coords}: { coords: string }) => {
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

    const isMock = async (mock: boolean) => {
        if (mock) {
            return ASTRONOMY;
        }
        let response = ASTRONOMY;
        // @ts-ignore
        await axios.request(options).then(res => {
            response = res.data;
        }).catch(err => {
            console.log(err);
        });
        return response;
    };

    useEffect(() => {
        isMock(false).then(data => {
            timeSetter(
                {
                    moon_illumination: parseInt(data.astronomy.astro.moon_illumination),
                    moon_phase: data.astronomy.astro.moon_phase,
                    moonrise: convertTime(data.astronomy.astro.moonrise),
                    moonset: convertTime(data.astronomy.astro.moonset),
                    sunrise: convertTime(data.astronomy.astro.sunrise),
                    sunset: convertTime(data.astronomy.astro.sunset),
                    localtime_epoch: data.location.localtime_epoch,
                    localtime: data.location.localtime
                }
            )
        })
    }, [coords]);

    if (time === null) return <div>Loading...</div>;
    const timeDifference = Math.floor(Date.parse(time.localtime) / 1000) - time.localtime_epoch;
    return (
        <DayNightCycle sunrise={time.sunrise} sunset={time.sunset}
                       localtime_epoch={Math.floor(Date.parse(time.localtime) / 1000)} timeDifference={timeDifference}
                       moonPhase={time.moon_phase} moonIllumination={time.moon_illumination}/>
    )
}

export default TimeFetcher;
