import { React, useEffect } from "react";

import GoogleMapReact from "google-map-react";
import Marker from "./ui/Marker";

import classes from "./Map.module.css";

function Map({ coords, setCoords, setBounds, placeDetails }) {






  const clickHandler = ({ x, y, lat, lng }) => {
    setCoords({
      lat: lat,
      lng: lng,
    });

    setBounds({ ne: x, sw: y });

  };
  return (
    <div className={classes.map}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.REACT_APP_GOOGLE_PLACES_API,
          libraries: ["places"],
          id: "__googleMapsScriptId",
        }}
        center={coords}
        defaultZoom={11}
        onClick={clickHandler}
        onChange={(e) => {
          setCoords({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
      
      >
        {placeDetails.map((place, i) => {
          return (
            <Marker
          
              lat={Number(place.latitude)}
              lng={Number(place.longitude)}
              key={i}
            />
          );
        })}
      </GoogleMapReact>
    </div>
  );
}

export default Map;

