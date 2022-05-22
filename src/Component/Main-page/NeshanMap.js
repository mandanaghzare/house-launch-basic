import React from 'react';
import { MapContainer, TileLayer, Popup, useMap, Marker } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
import './leaflet/geosearch.css';
import teslaData from "./data/tesla-site.json";
import { OpenStreetMapProvider } from 'leaflet-geosearch';
import L from "leaflet";
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('../../Img/marker-icon-2x.png'),
  iconUrl: require('../../Img/marker-icon.png'),
  shadowUrl: require('../../Img/marker-shadow.png')
});


const form = document.querySelector('form');
const input = form.querySelector('input[type="text"]');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const results = await provider.search({ query: input.value });
  console.log(results); // » [{}, {}, {}, ...]
});


function NeshanMap() {
  return (
    <MapContainer center={[35.699722, 51.337222]} zoom={13} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {teslaData.map(tsla => (
        <Marker key={tsla.id} position={[tsla.gps.latitude, tsla.gps.longitude]}>
          <Popup>{tsla.name}</Popup>
        </Marker>
      ))}



    </MapContainer>
  );
}

export default NeshanMap;
