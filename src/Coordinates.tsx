import React, {useEffect, useRef, useState} from 'react';
import Map from 'ol/Map';
import MousePosition from 'ol/control/MousePosition';
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';
import View from 'ol/View';
import {createStringXY} from 'ol/coordinate';
import {defaults as defaultControls} from 'ol/control';
import {transform} from 'ol/proj';
import WeatherFetcher from "./WeatherFetcher";

const apiKey = "26b014a7d03305a8996e7963db4c3635";

const mousePositionControl = new MousePosition({
    coordinateFormat: createStringXY(4),
    projection: 'EPSG:4326',
    // comment the following two lines to have the mouse position
    // be placed within the map.
    //className: 'custom-mouse-position',
    //target: document.getElementById('mouse-position') == null ? undefined : document.getElementById('mouse-position'),
})

interface Setter {
    setter: (value: number[]) => void;
}

const Coordinates = ({setter} : Setter) => {
    const [map, setMap] = useState<Map>();
    const mapElement : React.RefObject<HTMLDivElement> = React.createRef();
    useEffect(() => {
        const initialMap = new Map({
            controls: defaultControls().extend([mousePositionControl]),
            layers: [
                new TileLayer({
                    source: new OSM(),
                }),
            ],
            target: 'map',
            view: new View({
                center: [0, 0],
                zoom: 2,
            }),
        });
        initialMap.on('singleclick', function (evt) {
            setter(transform(evt.coordinate, 'EPSG:3857', 'EPSG:4326'));
        });
        setMap(initialMap);
    }, []);

    return (
        <div>
            <div ref={mapElement} id="map" className="map" style={{width: '100%', height: '500px'}} />
            <div id="mouse-position"/>
            <form>
                <label htmlFor="projection">Projection </label>
                <select id="projection" onChange={(e)=>mousePositionControl.setProjection(e.currentTarget.value)}>
                    <option value="EPSG:4326">EPSG:4326</option>
                    <option value="EPSG:3857">EPSG:3857</option>
                </select>
                <label htmlFor="precision">Precision</label>
                <input id="precision" type="number" min="0" max="12" value="4" onChange={
                    (e)=>{
                        console.log(e.currentTarget.value);
                        const format = createStringXY(e.currentTarget.valueAsNumber);
                        mousePositionControl.setCoordinateFormat(format);}}/>
            </form>
        </div>
    );
}
export default Coordinates;


