import React, {  useState, useRef } from "react";
import classes from "./List.module.css";
import Places from "./Places";

function List({type, placeDetails,setType, setRating}) {
 
  const selectedType = useRef();
  const selectedRatings = useRef();
  const [placeholder, setPlaceHolder] = useState("Attraction");


 

  const selectFormHandler = (event) => {
    event.preventDefault();
    setPlaceHolder(type)
    setType(selectedType.current.value);
    if(selectedRatings.current.value !== 'All'){
      setRating(selectedRatings.current.value);
    }
    
  };

  return (
    <div className={classes.list}>

    <div className={classes.list_header}>
      <h3>Food & Dining around you</h3>
      <form onChange={selectFormHandler}>
        <div>
          <label>Type</label>
          <select name="type" ref={selectedType}>
            <option value="restaurants">Restaurants</option>
            <option value="hotels">Hotels</option>
            <option value="attractions">Attractions</option>
          </select>
        </div>
        <div>
          <label>Ratings</label>
          <select
            ref={selectedRatings}
            name="Ratings"
            placeholder={placeholder}
          >
            <option value="All">All</option>
            <option value="Above_3.0">Above 3.0</option>
            <option value="Above_3.5">Above 3.0</option>
            <option value="Above_4.0">Above 4.0</option>
            <option value="Above_4.5">Above 4.5</option>
          </select>
        </div>
      </form>
    </div>
    <div className={classes.list_body}>
      <Places 
    loading={loading}
    placeDetails={placeDetails}
    />
    </div>
    
    
    </div>
  );
}

export default List;
