import React, { useEffect, useState } from 'react';
import './style.css';
import Header from './header';
import SimpleMap from './MapAmlak'
// import SimpleMap from "./example/SimpleMapFunctionBase";


const MainPage = (props) => {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    console.log(offset); 
    return ( 
        <div>
            <Header></Header>
            <SimpleMap />
        </div>
     );
}
 
export default MainPage;