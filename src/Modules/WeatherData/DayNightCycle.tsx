import React,{createRef} from 'react';

interface Cycle{
    sunrise:number,
    sunset:number
}

const DayNightCycle = ({sunrise,sunset}:Cycle) => {
    const canvasRef = createRef<HTMLCanvasElement>();
    return(
        <div id={'dayNightCycly'}>
            <p>Cykl dnia i nocy</p>
            <canvas ref={canvasRef} width={'500'} height={'500'}/>
        </div>
    )
}

export default DayNightCycle;
