import React from 'react';
import Compass from './Wind/Compass';

interface windProps {
    speed: number;
    speed_mph: number;
    deg: number;
    gust: number;
    gust_mph: number;
    units: string;
}

const Wind = ({speed, speed_mph, gust, gust_mph, deg, units}: windProps) => {
    return (
        <div id={"wind"} className={"mainBoxes"}>
            <div className={'wrapper'}>
                <div id={'values'}>
                    <h3>Wind</h3>
                    <p>{units === 'F' ? speed_mph + " mph" : speed + " km/h"}</p>
                    <p>{units === 'F' ? gust_mph + " mph" : gust + " km/h"}</p>
                    <p>{deg}°</p>
                </div>
                <Compass deg={deg - 135}/>
            </div>

        </div>
    );
}

export default Wind;
