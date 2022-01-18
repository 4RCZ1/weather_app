import React from 'react';
import Switch from '@mui/material/Switch';
import {FormControlLabel, FormGroup} from '@mui/material';

const label1 = { inputProps: { 'aria-label': 'Dark mode' } };
const label2 = { inputProps: { 'aria-label': 'Units' } };

interface headerProps {
    setDarkMode: (darkMode: boolean) => void;
    setUnit: (units: string) => void;
}

const Header = ({setDarkMode,setUnit}:headerProps) => {
    return(
        <header>
            <div id={"wrapper"}>
                <h1>Weather App</h1>
                <div id={'switches'}>
                    <FormGroup>
                        <FormControlLabel control={<Switch defaultChecked />} label="Units" />
                    </FormGroup>
                    <FormGroup>
                        <FormControlLabel control={<Switch defaultChecked color={'warning'}/>} label="Dark Mode" />
                    </FormGroup>
                </div>
            </div>
        </header>
    )
}

export default Header;
