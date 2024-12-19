import React, {memo} from 'react';

const Footer = () => {
    return (
        <footer>
            <div className={'wrapper'}>
                <ul>
                    <li><a href={'https://github.com/4RCZ1/weather_app'}>Weather App on Github</a></li>
                    <li><a href={'https://github.com/4RCZ1'}>More projects</a></li>
                </ul>
                <p>
                    Weather App © {new Date().getFullYear()} Marcin Alchimowicz
                </p>
            </div>
        </footer>
    )
}

export default memo(Footer);
