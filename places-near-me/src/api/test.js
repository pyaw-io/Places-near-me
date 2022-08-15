import { useState, useEffect } from "react";
import { getPlacesData } from "./api/travelAdvisorApi";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import { Loader } from '@googlemaps/js-api-loader'

//components
import Header from "./components/header/Header";
import List from "./components/list/List";
import Map from "./components/map/Map";

const App = () => {
  const [coords, setCoords] = useState({});
  const [places, setPlaces] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [bounds, setBounds] = useState(null);
  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState("");
  const [loading, setLoading] = useState(false);
  const [childClicked, setChildClicked] = useState(null);


  const loader = new Loader({
    apiKey: process.env.REACT_APP_GOOGLE_PLACES_API,
    id: "__googleMapsScriptId",
    libraries: ["places"]
  });
  

  const {
    ready,
    value,
    suggestions: { data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    debounce: 300,
  });

  const onSelect = async (suggestion) => {
    const results = await getGeocode({ placeId: suggestion.place_id });

    const coordinates = await getLatLng(results[0]);
    console.log(coordinates);

    setValue(suggestion.description, false);
    setCoords(coordinates);

    clearSuggestions();
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoords({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    const filtered = places?.filter((place) => Number(place.rating) > rating);

    setFilteredPlaces(filtered);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rating]);

  useEffect(() => {
    if (bounds) {
      setLoading(true);
      getPlacesData(type, bounds.sw, bounds.ne).then((data) => {
        setPlaces(data?.filter((place) => place.name && place.num_reviews > 0));
        setFilteredPlaces([]);
        setRating("");
        setLoading(false);
      });
    }
  }, [bounds, type]);

  return (
    <div className="md:100vh">
      <Header
        data={data}
        onSelect={onSelect}
        ready={ready}
        value={value}
        setValue={setValue}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[400px,3fr] w-full h-[calc(100vh-56px)]">
        <List
          type={type}
          setType={setType}
          rating={rating}
          setRating={setRating}
          places={filteredPlaces.length ? filteredPlaces : places}
          loading={loading}
          childClicked={childClicked}
        />

        <div className="z-10 flex items-center justify-center">
          <Map
            setCoords={setCoords}
            coords={coords}
            setBounds={setBounds}
            places={filteredPlaces.length ? filteredPlaces : places}
            setChildClicked={setChildClicked}
          />
        </div>
      </div>
    </div>
  );
};

export default App;