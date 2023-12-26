import React, {useEffect, useState} from 'react';
import Map from 'ol/Map';
import MousePosition from 'ol/control/MousePosition';
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';
import View from 'ol/View';
import {createStringXY} from 'ol/coordinate';
import {transform} from 'ol/proj';
import {DragPan, MouseWheelZoom, defaults} from 'ol/interaction';
import {platformModifierKeyOnly} from 'ol/events/condition';
import Modal from "../Helpers/Modal";
import ScrollHandler from './Coordinates/ScrollHandler';
import {Coordinates as CoordinatesType} from "../Services/WeatherAPI";

const mousePositionControl = new MousePosition({
    coordinateFormat: createStringXY(4),
    projection: 'EPSG:4326',
})

interface Setter {
    setter: (value: CoordinatesType) => void;
}

const Coordinates = ({setter}: Setter) => {
    const [map, setMap] = useState<Map>();
    const mapElement: React.RefObject<HTMLDivElement> = React.createRef();

    useEffect(() => {
        const initialMap = new Map({
            interactions: defaults({dragPan: true, mouseWheelZoom: false}).extend([
                new MouseWheelZoom({
                    condition: platformModifierKeyOnly,
                }),
            ]),
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
        const correctCoordinates = (coordinates: number): number => {
            return ((coordinates + 180) % 360) - 180;
        }
        initialMap.on('singleclick', function (evt) {
            const coord = transform(evt.coordinate, 'EPSG:3857', 'EPSG:4326');
            setter([correctCoordinates(coord[0]), correctCoordinates(coord[1])]);
        });
        navigator.geolocation.getCurrentPosition(location => {
            initialMap.setView(new View({
                center: transform([location.coords.longitude, location.coords.latitude], 'EPSG:4326', 'EPSG:3857'),
                zoom: 15,
            }));
            setter([correctCoordinates(location.coords.longitude), correctCoordinates(location.coords.latitude)]);
        });
        setMap(initialMap);
    }, []);

    return (
        <div id={'coordinates'}>
            <div ref={mapElement} id="map" className="map"/>
            <ScrollHandler/>
        </div>

    );
}
export default Coordinates;
