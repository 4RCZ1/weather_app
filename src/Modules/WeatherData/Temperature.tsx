import React from 'react';

interface temp {
    temp: number;
    feels_like: number;
    units: string;
}

const Temperature = ({temp, feels_like, units}: temp) => {
    return (
        <div id="temp" className="mainBoxes">
            <p>Temperature: {temp}° {units === 'F' ? 'F' : 'C'}</p>
            <p>Feels like: {feels_like}° {units === 'F' ? 'F' : 'C'}</p>
        </div>
    );
};

export default Temperature;
