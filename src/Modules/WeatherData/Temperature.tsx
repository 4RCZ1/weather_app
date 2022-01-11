import React from 'react';

interface temp {
    temp: number;
    feels_like: number;
    unit?: string;
}

const Temperature = ({ temp,feels_like,unit }:temp) => {
  return (
    <div id="temp"  className="mainBoxes">
      <div className="temp__value">
          <span>Temperatura: </span>
          <span>{temp}</span>
          <span>°</span>
          <span>{unit === 'F' ? 'F' : 'C'}</span>
      </div>
      <div className="temp__feels">
          <span>Odczuwalna: </span>
          <span>{feels_like}</span>
      </div>
    </div>
  );
};

export default Temperature;
