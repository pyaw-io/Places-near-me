import React, { useEffect, useState } from "react";
import classes from "./List.module.css";
import { getPlacesData } from "./api/travelAdviser";

function List() {
  const [placeholder, setPlaceHolder] = useState("Attraction");
  const [ratings, setRatings] = useState("Ratings");

  useEffect(() => {
    getPlacesData()

    
    
  })






  const selectFormHandler = (event) => {
    event.preventDeafault();
  };
  return (
    <div className={classes.list}>
      
        <h2>Food & Dining around you</h2>
        <form onSubmit={selectFormHandler}>
          <div>
            <label>Type</label>
            <select name="type">
              <option value="Restaurants">Restaurants</option>
              <option value="Hotels">Hotels</option>
              <option value="Attractions">Attractions</option>
            </select>
          </div>
          <div>
            <label>Ratings</label>
            <select name="Ratings" placeholder={placeholder}>
              <option value="All">All</option>
              <option value="Above_3.0">Above 3.0</option>
              <option value="Above_4.0">Above 4.0</option>
              <option value="Above_4.5">Above 4.5</option>
            </select>
          </div>
        </form>
    
    </div>
  );
}

export default List;
