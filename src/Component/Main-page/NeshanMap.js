import React from 'react';
import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet';

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


function NeshanMap(props) {
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
          activate={props.activate}
          resultClick={props.resultClick}
          setActivate={props.setActivate}
          provider={prov}
          popupFormat={({ query, result }) => result.label}
          maxMarkers={2}
          retainZoomLevel={true}
          animateZoom={true}
          showMarker={false}
          autoClose={true}
          closeResultsOnClick={true}
          searchLabel={"جستجوس موقعیت مکانی"}
          keepResult={false}
        />
      </MapContainer>

    </div>
  );
}

export default NeshanMap;
