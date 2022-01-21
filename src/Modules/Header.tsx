import React from 'react';
import Switch from '@mui/material/Switch';
import {FormControlLabel, FormGroup} from '@mui/material';
import DarkModeSwitch from '../Helpers/DarkModeSwitch';

const label1 = { inputProps: { 'aria-label': 'Dark mode' } };
const label2 = { inputProps: { 'aria-label': 'Units' } };

interface headerProps {
    setDarkMode: (darkMode: boolean) => void;
    setUnit: (units: string) => void;
}

const Header = ({setDarkMode,setUnit}:headerProps) => {

    const switchModes = () => {
        const element = document.getElementById('app');
        if(element) {
            const mode = element.className;
            if (mode === 'whiteMode') {
                element.className = 'darkMode';
            }else{
                element.className = 'whiteMode';
            }
        }
    }
    return(
        <header>
            <div id={"wrapper"}>
                <h1>Weather App</h1>
                <div id={'switches'}>
                    <FormGroup>
                        <FormControlLabel control={<Switch defaultChecked />} label="Units" />
                    </FormGroup>
                    <FormGroup>
                        <FormControlLabel control={<Switch onClick={switchModes} defaultChecked color={'warning'}/>} label="Dark Mode" />
                    </FormGroup>
                    <DarkModeSwitch/>
                </div>
            </div>
        </header>
    )
}

export default Header;
