import React from 'react';
import { MapContainer, TileLayer, Popup, useMap, Marker } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
import './leaflet/geosearch.css';
import teslaData from "./data/tesla-site.json";
import { OpenStreetMapProvider } from "react-leaflet-geosearch";
import SearchControl from "./SearchControl";

import { LatLng } from "leaflet";

import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('../../Img/marker-icon-2x.png'),
  iconUrl: require('../../Img/marker-icon.png'),
  shadowUrl: require('../../Img/marker-shadow.png')
});


// const form = document.querySelector('form');
// const input = form.querySelector('input[type="text"]');

// form.addEventListener('submit', async (event) => {
//   event.preventDefault();

//   const results = await provider.search({ query: input.value });
//   console.log(results); // » [{}, {}, {}, ...]
// });


function NeshanMap() {
  const prov = OpenStreetMapProvider();
  return (
    <div className="">
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

      <SearchControl
          provider={prov}
          popupFormat={({ query, result }) => result.label}
          maxMarkers={2}
          retainZoomLevel={true}
          animateZoom={true}
          autoClose={true}
          closeResultsOnClick={true}
          searchLabel={"جسنجوس موقعیت مکانی"}
          keepResult={false}
            searchBounds= {[
              new LatLng(33.100745405144245, 46.48315429687501),
              new LatLng(44.55916341529184, 24.510498046875)
            ]}
        />
      </MapContainer>

    </div>
  );
}

export default NeshanMap;
