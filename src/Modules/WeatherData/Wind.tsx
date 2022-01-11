import React from 'react';
import Compass from './Wind/Compass';

interface windProps {
  speed: number;
  deg: number;
  gust: number;
}

const Wind = ({speed,gust,deg}:windProps) => {
    return (
        <div id={"wind"}  className={"mainBoxes"} >
            <h3>Wind</h3>
            <div className="wind-speed">
              <span className="wind-speed-value">{speed}</span>
              <span className="wind-speed-unit"> km/h</span>
            </div>
            <div className="wind-gust">
              <span className="wind-gust-value">{gust}</span>
              <span className="wind-gust-unit"> km/h</span>
            </div>
            <div className="wind-direction">
              <span className="wind-direction-value">{deg}</span>
              <span className="wind-direction-unit">°</span>
            </div>
            <Compass deg={deg-45} />
        </div>
    );
}

export default Wind;
