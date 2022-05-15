import React, {useState, useRef} from 'react';
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import L from 'leaflet';
import "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/images/marker-icon.png";
import 'leaflet/dist/leaflet.css';
import './style.css';
import useGeoLocation from './useGeoLocaton'


import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

const SimpleMap = () => {
  const [center, setCenter] = useState({ lat: 13.084622, lng: 80.248357 });
  const ZOOM_LEVEL = 9;
  const mapRef = useRef();

  const location = useGeoLocation();

  const showMyLocation = () => {
    if (location.loaded && !location.error) {
      mapRef.current.leafletElement.flyTo(
        [location.coordinates.lat, location.coordinates.lng],
        ZOOM_LEVEL,
        { animate: true },
        console.log('located'),
      );
    } else {
      alert(location.error.message)
    }
  }
  return (
    <div>
    <MapContainer center={[51.505, -0.09]} zoom={16} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {location.loaded && !location.error && (
        <Marker
          icon={icon}
          position={[
            location.coordinates.lat,
            location.coordinates.lng,
          ]}
        >
        </Marker>
      )}
      <button onClick={showMyLocation} className='locationnnnn' style={{
        width: "100px",
        height: "100px",
        position:"relative",
        zIndex:"100000",
      }}>click</button>
    </MapContainer>  
    </div>
  );
}

export default SimpleMap;