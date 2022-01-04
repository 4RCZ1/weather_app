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
            <img src={'https:' + type.icon} alt={type.description}/>
        </div>
    );
};
export default Type;
