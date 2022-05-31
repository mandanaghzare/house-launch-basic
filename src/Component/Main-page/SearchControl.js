import { useEffect, useState } from "react";
import { useMap } from "react-leaflet";
import { GeoSearchControl} from "leaflet-geosearch";
import "./react-leaflet-geosearch.css";
import { useDispatch } from "react-redux";
import { deActive } from "../../redux/activateSlice";

const SearchControl = (props) => {
  const dispatch = useDispatch()
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
      dispatch(deActive())
    })
    return () => map.removeControl(searchControl);
  }, [map, props]);
  return null;
};
export default SearchControl;
