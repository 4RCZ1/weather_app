import React, {createRef, useEffect, useState} from 'react';

interface Cycle {
    sunrise: number,
    sunset: number,
    localtime_epoch: number,
    timeDifference: number;
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
 * @description This component is responsible for drawing the day/night cycle
 * @param sunrise timestamp of sunrise in seconds
 * @param sunset timestamp of sunset in seconds
 * @param timezone timezone offset in seconds
 */
const DayNightCycle = ({sunrise, sunset, localtime_epoch, timeDifference}: Cycle) => {
    const [intervals,setIntervals] = useState<number>(0);
    let mainStep = 0;
    const maxMainStep = 90;
    const dayLength = sunset - sunrise;
    const dayNightProportion = dayLength / (24*60*60);
    const currentDate = localtime_epoch*1000;
    const sunsetDate = sunset*1000;
    const sunriseDate = sunrise*1000;
    const midnightDate = Math.floor(new Date(new Date().getTime() + timeDifference * 1000).setHours(0, 0, 0, 0));
    const secondsSinceMidnight = (currentDate - midnightDate) / 1000;

    const sunriseDateString = new Date(sunriseDate).toLocaleTimeString().slice(0, -3);
    const sunsetDateString = new Date(sunsetDate).toLocaleTimeString().slice(0, -3);
    const currentDateString = new Date(currentDate).toLocaleTimeString().slice(0, -3);

    let SunX : number|null = null;
    const setSunX = (val:number) => {
        if(SunX === null) {
            SunX = Math.floor(val);
        }
    }

    const initialAnimation = () => {
        const canvas = document.getElementById('canvas1') as HTMLCanvasElement;
        if (canvas) {
            const ctx = canvas.getContext('2d');
            const width = canvas.width;
            const height = canvas.height;
            const horizon = height/6*4 * dayNightProportion + height/6;
            console.log(horizon);
            setSunX(width/24/60/60 * secondsSinceMidnight);
            if(ctx){
                const dayNightGradient = ctx.createLinearGradient(0, horizon-height/15, 0, horizon+height/20);
                dayNightGradient.addColorStop(0, '#487aff');
                dayNightGradient.addColorStop(1, '#111f69');
                dayNightGradient.addColorStop(horizon/height+1/6, '#ff9116');
                ctx.strokeStyle = dayNightGradient;
                requestAnimationFrame(()=>animationStep(ctx,width,height,0,horizon));
            }
        }
    }

    const animationStep = (ctx: CanvasRenderingContext2D,width : number,height : number, prevX : number, horizon : number) => {
        const substepsPerStep = Math.abs(Math.ceil(1.5*(width/maxMainStep)*Math.sin((width/maxMainStep * mainStep)/width * Math.PI)));
        let x2 = prevX;
        for (let i = 0 ; i < substepsPerStep ; i++) {
            const y = height / 2;
            x2++;
            const radians = x2 / width * Math.PI * 2;
            const y2 = y + height/3 * Math.cos(radians);
            if (ctx) {
                // ctx.strokeStyle = y2 <= horizon ? '#3aaaff' : '#1f2e70';
                ctx.beginPath();
                ctx.moveTo(x2-1, horizon);
                ctx.lineTo(x2, y2);
                ctx.stroke();
            }
            // @ts-ignore
            if(x2 <= SunX) {
                const canvas2 = document.getElementById('canvas2') as HTMLCanvasElement;
                if(canvas2){
                    const ctx2 = canvas2.getContext('2d');
                    if(ctx2){
                        clearCanvas(canvas2);
                        const color = y2 <= horizon ? '#ffe100' : '#525d5d';
                        ctx2.strokeStyle = color;
                        ctx2.fillStyle = color;
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
            requestAnimationFrame(()=>animationStep(ctx,width,height,x2,horizon));
        }
    }

    useEffect(() => {
        let interval : null | NodeJS.Timer = null;
        interval = setInterval(() => {
            setIntervals(prev => prev + 1);
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
        return () => {
            if (interval) {
                clearInterval(interval);
            }
        }
    }, [sunrise,sunset]);

    return (
        <div id={'dayNightCycle'} className="mainBoxes">
            <p>Cykl dnia i nocy</p>
            <p>wschód: {sunriseDateString}</p>
            <p>zachód: {sunsetDateString}</p>
            <p>obecnie: {currentDateString}</p>
            <p>Długość dnia: {Math.floor(dayLength/60/60)}:{Math.floor((dayLength-Math.floor(dayLength/60/60)*60*60)/60)}</p>
            <div id={'dayNightCycleContainer'}>
                <canvas id={'canvas1'} width={'1000'} height={'300'}/>
                <canvas id={'canvas2'} width={'1000'} height={'300'}/>
            </div>
        </div>
    )
}

export default DayNightCycle;
