import React, {useEffect, useState} from 'react';
import Map from 'ol/Map';
import MousePosition from 'ol/control/MousePosition';
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';
import View from 'ol/View';
import {createStringXY} from 'ol/coordinate';
import {transform} from 'ol/proj';

const mousePositionControl = new MousePosition({
    coordinateFormat: createStringXY(4),
    projection: 'EPSG:4326',
})

interface Setter {
    setter: (value: number[]) => void;
}

const Coordinates = ({setter}: Setter) => {
    const [map, setMap] = useState<Map>();
    const mapElement: React.RefObject<HTMLDivElement> = React.createRef();

    useEffect(() => {

        const initialMap = new Map({
            controls: [],
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
        navigator.geolocation.getCurrentPosition(location => {
            initialMap.setView(new View({
                center: transform([location.coords.longitude, location.coords.latitude], 'EPSG:4326', 'EPSG:3857'),
                zoom: 15,
            }));
            setter([location.coords.longitude, location.coords.latitude]);
        });
        setMap(initialMap);
    }, []);

    return (
        <div>
            <div ref={mapElement} id="map" className="map"/>
        </div>
    );
}
export default Coordinates;


