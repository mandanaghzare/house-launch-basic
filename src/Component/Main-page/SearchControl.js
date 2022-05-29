import { useEffect, useState } from "react";
import { useMap } from "react-leaflet";
import { GeoSearchControl } from "leaflet-geosearch";
import "./react-leaflet-geosearch.css";
import ReactDOM from 'react-dom';

const SearchControl = (props) => {
  const map = useMap();
  const [isActive, setActive] = useState('false');

  useEffect(() => {
    const mmm = document.getElementsByClassName("results")
    const length = mmm.innerHtml
    console.log(length)
    mmm.addEventListener('click', function(){
        setActive(!isActive);
      });
  }, []);




  useEffect(() => {
    const searchControl = new GeoSearchControl({
      notFoundMessage: 'مکان مورد نظر یافت نشد',
      provider: props.provider,
      ...props,
    });
    map.addControl(searchControl);
    return () => map.removeControl(searchControl);
  }, [map, props]);

  return null;
};
export default SearchControl;
