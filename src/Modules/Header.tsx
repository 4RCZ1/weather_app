import React from 'react';
import Switch from '@mui/material/Switch';
import {FormControlLabel, FormGroup} from '@mui/material';

const label1 = { inputProps: { 'aria-label': 'Dark mode' } };
const label2 = { inputProps: { 'aria-label': 'Units' } };

const Header = () => {
    return(
        <header>
            <div id={"wrapper"}>
                <h1>Weather App</h1>
                <FormGroup>
                    <FormControlLabel control={<Switch defaultChecked />} label="Units" />
                </FormGroup>
                <FormGroup>
                    <FormControlLabel control={<Switch defaultChecked color={'warning'}/>} label="Dark Mode" />
                </FormGroup>
            </div>
        </header>
    )
}

export default Header;
