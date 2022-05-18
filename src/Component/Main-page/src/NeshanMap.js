import React, { useEffect, useRef } from "react";
import neshan_map_loader from "./loaders/neshan_map_loader";
import "./NeshanMap.css";

const NeshanMap = (props) => {
  const { style, options, onInit } = props;
  const mapEl = useRef(null);

  const defaultStyle = {
    width: "100%",
    height: "100vh",
    margin: 0,
    padding: 0,
    background: "#eee",
    zIndex: '-1'
  };

  const defaultOptions = {
    key: "web.OiIxeNdmM6fWRfBug71LYiXYyNcc7G5UWkLAe6Zk",
    maptype: "dreamy",
    poi: true,
    traffic: false,
    center: [35.699739, 51.338097],
    zoom: 14,
  };

  
  useEffect(() => {
    neshan_map_loader({
      onLoad: () => {
        let map = new window.L.Map(mapEl.current, { ...defaultOptions, ...options });
        if (onInit) onInit(window.L, map);
      },
      onError: () => {
        console.error("Neshan Maps Error: This page didn't load Neshan Maps correctly");
      },
    });
  },[]);
  return <div className="_main_map" ref={mapEl} style={{ ...defaultStyle, ...style }} />;
};

export default NeshanMap;
