import React, {useState, useRef} from 'react';
import NeshanMap from 'react-neshan-map-leaflet';

const SimpleMap = () => {
  return (
    <NeshanMap
      options={{
        key: 'service.gfFdceFjHrFPlr29pU75W7guPa7nkmM5ZVgLGj47',
        center: [35.699739, 51.338097],
        zoom: 13
      }}
    />
  );
}

export default SimpleMap;