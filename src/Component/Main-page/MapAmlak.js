import React, {useState, useRef} from 'react';
import NeshanMap from './src/NeshanMap';

const SimpleMap = () => {
  return (            
      <NeshanMap
        options={{
          key: 'web.OiIxeNdmM6fWRfBug71LYiXYyNcc7G5UWkLAe6Zk',
          center: [35.699739, 51.338097],
          zoom: 13
        }}
      />
  );
}

export default SimpleMap;