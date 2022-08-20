import { useState, useEffect } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import Header from "./components/Header";
import Map from "./components/Map";
import List from "./components/List";
import classes from "./App.module.css";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";

const loader = new Loader({
  apiKey: process.env.REACT_APP_GOOGLE_PLACES_API,
  id: "__googleMapsScriptId",
  libraries: ["places"],
});



function App() {
  const [coords, setCoords] = useState({});
  const [bounds, setBounds] = useState(null);
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState('restaurants');
  const [rating, setRating] = useState('5');
  const [placeDetails, setPlaceDetails] = useState({});


  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      /* Define search scope here */
    },
    debounce: 300,
  });

  //get the selected location
  const handleSelect =
    ({ description }) =>
    () => {
      // When user selects a place, we can replace the keyword without request data from API
      // by setting the second parameter to "false"
      setValue(description, false);
      clearSuggestions();

  // Get latitude and longitude via utility functions
      getGeocode({ address: description }).then((results) => {
        const { lat, lng } = getLatLng(results[0]);

        setCoords({ lat, lng });

        setLoading(true);
      });
    };

  //load places
  useEffect(() => {
    if (bounds) {
      getPlacesData(type,rating, bounds.sw, bounds.ne).then((data) => {
        setPlaceDetails(
          data?.filter((place) => place.name && place.num_reviews > 0)
        );

        setLoading(true)
      });
    }
  }, [bounds,type,rating]);

  //get the current location

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoords({ lat: latitude, lng: longitude });
      }
    );
    setLoading(true);
  }, []);

  return (
    <div>
      <Header
        data={data}
        ready={ready}
        value={value}
        setValue={setValue}
        handleSelect={handleSelect}
      />
      <main className={classes.main}>
        <List
          setType={setType}
          setRating={setRating}
          type={type}
          loading={loading}
          placeDetails={placeDetails}
        />
        {loading && (
          <Map
            coords={coords}
            bounds={bounds}
            setBounds={setBounds}
            setCoords={setCoords}
            placeDetails={placeDetails}
          />
        )}
      </main>
    </div>
  );
}

export default App;
