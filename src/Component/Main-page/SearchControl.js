import { useEffect, useState } from "react";
import { useMap } from "react-leaflet";
import { GeoSearchControl} from "leaflet-geosearch";
import "./react-leaflet-geosearch.css";

const SearchControl = (props) => {
  const map = useMap();
  
  useEffect(() => {
    const searchControl = new GeoSearchControl({
      notFoundMessage: 'مکان مورد نظر یافت نشد',
      provider: props.provider,
      ...props,
    });
    map.addControl(searchControl);
    let searchResult = searchControl.resultList.elements.container;
    searchResult.addEventListener('click', function(){
      props.resultClick(
          props.setActivate(props.activate)
          )
    })
    
    console.log(props.setActivate);
    return () => map.removeControl(searchControl);
  }, [map, props]);
  return null;
};
export default SearchControl;
