import React, { useEffect, useState } from 'react';
import './style.css';
import Header from './header';
import SimpleMap from './MapAmlak'
// import SimpleMap from "./example/SimpleMapFunctionBase";


const MainPage = (props) => {
    return ( 
        <div>
            <Header></Header>
            <SimpleMap />
        </div>
     );
}
 
export default MainPage;