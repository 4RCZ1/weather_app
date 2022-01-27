import React, {useEffect} from 'react';

interface WeatherType {
    type: {
        description: string;
        icon: string;
    }

}



const Type = ({type}: WeatherType) => {
    const [imageUrl, setImageUrl] = React.useState<string>('https:' + type.icon);

    useEffect(() => {
        let timeoutId: NodeJS.Timeout | null = null;
        const resizeListener = () => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
            const weatherIcon = document.getElementById('icon') as HTMLImageElement;
            const size = weatherIcon.width>64?'128x128':'64x64';
            timeoutId = setTimeout(() => setImageUrl(imageUrl.slice(0,35) + size + imageUrl.slice(40)), 100);
        }
        window.addEventListener('resize',resizeListener);
        return () => {
            window.removeEventListener('resize',resizeListener);
        }
    }, []);

    return (
        <div id="type" className="mainBoxes">
            <h3>{type.description}</h3>
            <img id={'icon'} src={imageUrl} alt={type.description}/>
        </div>
    );
};
export default Type;
