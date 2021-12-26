import React, {createRef, useEffect, useState} from 'react';

interface Cycle {
    sunrise: number,
    sunset: number
}

function isInViewport(element : HTMLElement | null) : boolean {
    if (element === null) {
        return false;
    }
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

const DayNightCycle = ({sunrise, sunset}: Cycle) => {
    const [timeInterval, setTimeInterval] = useState<null | NodeJS.Timer>(null);
    let step = 0;
    const maxStep = 30;
    const canvasRef = createRef<HTMLCanvasElement>();

    const initialAnimation = () => {
        const canvas = document.getElementById('canvas1') as HTMLCanvasElement;
        if (canvas) {
            if(isInViewport(document.getElementById('canvas1'))){
                const ctx = canvas.getContext('2d');
                //const time = new Date().getTime();
                const width = canvas.width;
                const height = canvas.height;
                const substepsPerStep = Math.ceil(width / maxStep);
                for (let i = 0 ; i < substepsPerStep ; i++) {
                    const x = step*substepsPerStep + i;
                    const y = height / 2;
                    const x2 = x + 1;
                    const radians = x2 / width * Math.PI * 2;
                    const y2 = y + 100 * Math.cos(radians);
                    if (ctx) {
                        ctx.beginPath();
                        ctx.moveTo(x, y);
                        ctx.lineTo(x2, y2);
                        ctx.stroke();
                    }
                }
                step++;
                if (step <= maxStep) {
                    requestAnimationFrame(initialAnimation);
                }
            }
        }
    }

    useEffect(() => {
        if (timeInterval === null) {
            setTimeInterval(setInterval(()=>{
                if(isInViewport(document.getElementById('canvas1'))){
                    // @ts-ignore
                    clearInterval(timeInterval);
                    initialAnimation();
                }
            }, 100));
        }
    }, []);

    return (
        <div id={'dayNightCycly'}>
            <p>Cykl dnia i nocy</p>
            <canvas id={'canvas1'} ref={canvasRef} width={'800'} height={'300'}/>
        </div>
    )
}

export default DayNightCycle;
