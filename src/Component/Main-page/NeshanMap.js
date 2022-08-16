import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet';
import { usePosition } from 'use-position';
import 'leaflet/dist/leaflet.css';
import './leaflet/geosearch.css';
import teslaData from "./data/tesla-site.json";
import { OpenStreetMapProvider } from "react-leaflet-geosearch";
import SearchControl from "./SearchControl";
import { useGeolocated } from "react-geolocated";


import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('../../Img/marker-icon-2x.png'),
  iconUrl: require('../../Img/marker-icon.png'),
  shadowUrl: require('../../Img/marker-shadow.png')
});


function NeshanMap(props) {
  const prov = OpenStreetMapProvider();
  
  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
  useGeolocated({
    positionOptions: {
      enableHighAccuracy: true,
    },
    userDecisionTimeout: 5000,
  });

  console.log(coords)
  return !isGeolocationAvailable ? (
    <div>مرورگر شما از موقعیت جغرافیایی پشتیبانی نمی کند</div>
    ) : !isGeolocationEnabled ? (
        <div>موقعیت جغرافیایی فعال نیست</div>
    ) : coords ? (    
      <div className="">
      <MapContainer center={[coords.latitude, coords.longitude]} zoom={15} scrollWheelZoom={true}>
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
    ) : (
        <div>در حال دریافت اطلاعات مکان&hellip; </div>
    );
}

export default NeshanMap;
