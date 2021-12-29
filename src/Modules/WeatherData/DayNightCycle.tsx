import React, {createRef, useEffect, useState} from 'react';

interface Cycle {
    sunrise: number,
    sunset: number
    timezone: number;
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
const clearCanvas = (canvas : HTMLCanvasElement | null) => {
    if (canvas !== null && canvas.getContext('2d') !== null) {
        // @ts-ignore
        canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
    }
}
/**
 *
 * @param sunrise timestamp of sunrise in seconds
 * @param sunset timestamp of sunset in seconds
 * @param timezone timezone offset in seconds
 *
 */
const DayNightCycle = ({sunrise, sunset, timezone}: Cycle) => {
    let interval : null | NodeJS.Timer = null;
    let mainStep = 0;
    const maxMainStep = 90;
    const dayLength = sunset - sunrise;
    const dayNightProportion = dayLength / (24*60*60);

    const sunriseDateString = new Date(sunrise * 1000 + timezone * 1000).toLocaleTimeString();
    const sunsetDateString = new Date(sunset * 1000 + timezone * 1000).toLocaleTimeString();

    const initialAnimation = () => {
        const canvas = document.getElementById('canvas1') as HTMLCanvasElement;
        if (canvas) {
            const ctx = canvas.getContext('2d');
            const time = new Date().getTime();
            const width = canvas.width;
            const height = canvas.height;
            const targetX = Math.floor(width/24/60/60 * (time/1000 - sunrise));
            console.log(targetX);
            const horizon = height/3*5 * dayNightProportion;
            if(ctx){
                requestAnimationFrame(()=>animationStep(ctx,width,height,0,horizon,targetX))
            }
        }
    }

    const animationStep = (ctx: CanvasRenderingContext2D,width : number,height : number, prevX : number, horizon : number, targetX : number) => {
        const substepsPerStep = Math.abs(Math.ceil(1.5*(width/maxMainStep)*Math.sin((width/maxMainStep * mainStep)/width * Math.PI)));
        let x2 = prevX;
        for (let i = 0 ; i < substepsPerStep ; i++) {
            const y = height / 2;
            x2++;
            const radians = x2 / width * Math.PI * 2;
            const y2 = y + height/3 * Math.cos(radians);
            if (ctx) {
                ctx.strokeStyle = y2 <= horizon ? '#3aaaff' : '#1f2e70';
                ctx.beginPath();
                ctx.moveTo(x2-1, horizon);
                ctx.lineTo(x2, y2);
                ctx.stroke();
            }
            if(x2 === targetX) {
                const canvas2 = document.getElementById('canvas2') as HTMLCanvasElement;
                if(canvas2){
                    const ctx2 = canvas2.getContext('2d');
                    if(ctx2){
                        ctx2.strokeStyle = '#ffe100';
                        ctx2.fillStyle = '#ffe100';
                        ctx2.beginPath();
                        ctx2.arc(x2, y2, 20, 0, 2*Math.PI);
                        ctx2.fill();
                        ctx2.stroke();
                    }
                }
            }
        }
        mainStep++;
        if (mainStep <= maxMainStep) {
            requestAnimationFrame(()=>animationStep(ctx,width,height,x2,horizon,targetX));
        }
    }

    useEffect(() => {
        interval = setInterval(() => {
            if (isInViewport(document.getElementById('canvas1'))) {
                if (interval) {
                    clearInterval(interval);
                }

                // @ts-ignore
                clearCanvas(document.getElementById('canvas1'));
                clearCanvas(document.getElementById('canvas2') as HTMLCanvasElement);
                initialAnimation();
            }
        }, 100);
    }, [sunrise,sunset,timezone]);

    return (
        <div id={'dayNightCycle'}>
            <p>Cykl dnia i nocy</p>
            <div id={'dayNightCycleContainer'}>
                <canvas id={'canvas1'} width={'1000'} height={'300'}/>
                <canvas id={'canvas2'} width={'1000'} height={'300'}/>
            </div>
        </div>
    )
}

export default DayNightCycle;
