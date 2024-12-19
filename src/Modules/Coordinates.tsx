import React, {memo, useEffect, useRef} from 'react';
import Map from 'ol/Map';
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';
import View from 'ol/View';
import {transform} from 'ol/proj';
import {MouseWheelZoom, defaults} from 'ol/interaction';
import {platformModifierKeyOnly} from 'ol/events/condition';
import ScrollHandler from './Coordinates/ScrollHandler';
import {Coordinates as CoordinatesType} from '../Services/WeatherAPI';

interface CoordinatesProps {
    setCoordinates: React.Dispatch<React.SetStateAction<CoordinatesType | null>>;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const Coordinates = ({setCoordinates, setLoading}: CoordinatesProps) => {
    const mapElement = useRef<HTMLDivElement>(null);
    const mapRef = useRef<Map | null>(null);

    useEffect(() => {
        if (!mapRef.current) {
            mapRef.current = new Map({
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
                target: mapElement.current!,
                view: new View({
                    center: [0, 0],
                    zoom: 2,
                }),
            });

            const correctCoordinates = (coordinates: number): number => {
                return ((coordinates + 180) % 360) - 180;
            };

            mapRef.current.on('singleclick', function (evt) {
                const coord = transform(evt.coordinate, 'EPSG:3857', 'EPSG:4326');
                console.log('setting coords from click')
                setCoordinates([correctCoordinates(coord[0]), correctCoordinates(coord[1])]);
            });

            setLoading(true);
            navigator.geolocation.getCurrentPosition(location => {
                setLoading(false);
                if(!mapRef.current) return;
                mapRef.current.setView(new View({
                    center: transform([location.coords.longitude, location.coords.latitude], 'EPSG:4326', 'EPSG:3857'),
                    zoom: 15,
                }));
                console.log('setting coords')
                setCoordinates([correctCoordinates(location.coords.longitude), correctCoordinates(location.coords.latitude)]);
            }, () => {
                setLoading(false);
            });
        }
    }, [setCoordinates, setLoading]);

    return (
        <div id="coordinates">
            <div ref={mapElement} id="map" className="map"/>
            <ScrollHandler/>
        </div>
    );
};

export default memo(Coordinates);