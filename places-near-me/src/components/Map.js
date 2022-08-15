import React from "react";

import GoogleMapReact from "google-map-react";

import classes from "./Map.module.css";

function Map({ coords, setCoords, setBounds }) {
  //   const defaultCoords = {
  //     "lat": 51.5072178,
  //     "lng": -0.1275862
  // }

  const clickHandler = ({ x, y, lat, lng }) => {
    setCoords({
      lat: lat,
      lng: lng,
    });

    setBounds({ ne: x, sw: y });

    console.log(x, y, lat, lng);
  };

  return (
    <div className={classes.map}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.REACT_APP_GOOGLE_PLACES_API,
          libraries: ["places"],
          id: "__googleMapsScriptId",
        }}
        defaultCenter={coords}
        center={coords}
        defaultZoom={11}
        onClick={clickHandler}
      ></GoogleMapReact>
    </div>
  );
}

export default Map;
