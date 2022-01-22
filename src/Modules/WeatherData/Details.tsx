import React from 'react';

interface details {
    humidity: number;
    pressure: number;
    clouds: number;
}

const Details = ({humidity, pressure, clouds}: details) => {
    return (
        <div id="details" className="mainBoxes">
            <h3>Details</h3>
            <p>Humidity: {humidity}%</p>
            <p>Pressure: {pressure} hPa</p>
            <p>Clouds: {clouds}%</p>
        </div>
    );
};
export default Details;
