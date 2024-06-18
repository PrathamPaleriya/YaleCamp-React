// MyMapComponent.js
import React, { useContext } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { CampgroundContext } from '../../contect/CampgroundContext';


const Map = ({id, location, title}) => {

  const center = [location.lat, location.lng]; 
  const zoom = 13;

  return (
    <MapContainer center={center} zoom={zoom} style={{ height: '100%', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker key={id} position={center}>
        <Popup>
         {title}
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
