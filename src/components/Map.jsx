import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
import 'tailwindcss/tailwind.css';

const MapComponent = () => {
    // Установка начальных координат для Германии
    const defaultPosition = [51.1657, 10.4515]; // Координаты Германии

    return (
        <div className="w-full h-64">
            <MapContainer center={defaultPosition} zoom={6} className="w-full h-full" attributionControl={false}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {/* Добавляем маркер в Германию */}
                <Marker position={defaultPosition}>
                    <Popup>
                        Mauerstraße 12, 10117 Berlin
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

export default MapComponent;
