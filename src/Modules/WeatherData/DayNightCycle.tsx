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
    let interval : null | NodeJS.Timer = null;
    let mainStep = 0;
    const maxMainStep = 90;
    const canvasRef = createRef<HTMLCanvasElement>();

    const initialAnimation = (prevX : number) => {
        const canvas = document.getElementById('canvas1') as HTMLCanvasElement;
        if (canvas) {
            const ctx = canvas.getContext('2d');
            //const time = new Date().getTime();
            const width = canvas.width;
            const height = canvas.height;
            const substepsPerStep = Math.abs(Math.ceil(1.5*(width/maxMainStep)*Math.sin((width/maxMainStep * mainStep)/width * Math.PI)));
            console.log(substepsPerStep);
            let x2 = prevX;
            for (let i = 0 ; i < substepsPerStep ; i++) {
                const y = height / 2;
                x2++;
                const radians = x2 / width * Math.PI * 2;
                const y2 = y + height/3 * Math.cos(radians);
                if (ctx) {
                    ctx.beginPath();
                    ctx.moveTo(x2-1, y);
                    ctx.lineTo(x2, y2);
                    ctx.stroke();
                }
            }
            mainStep++;
            if (mainStep <= maxMainStep) {
                requestAnimationFrame(()=>initialAnimation(x2));
            }
        }
    }

    useEffect(() => {
        interval = setInterval(() => {
            if (isInViewport(document.getElementById('canvas1'))) {
                if (interval) {
                    clearInterval(interval);
                }
                initialAnimation(0);
            }
        }, 100);
    }, []);

    return (
        <div id={'dayNightCycly'}>
            <p>Cykl dnia i nocy</p>
            <canvas id={'canvas1'} ref={canvasRef} width={'1000'} height={'300'}/>
        </div>
    )
}

export default DayNightCycle;
