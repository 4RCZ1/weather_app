import React from 'react';

interface WeatherType {
    type:{
        description: string;
        icon: string;
    }

}

const Type = ({type}:WeatherType) => {
    return (
        <div id="type">
            <h3>{type.description}</h3>
            <img src={'http://openweathermap.org/img/wn/' + type.icon + '@2x.png'} alt={type.description}/>
        </div>
    );
};
export default Type;
