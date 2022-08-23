import React, {  useState, useRef,CSSProperties } from "react";
import classes from "./List.module.css";
import Places from "./Places";
import ClipLoader from "react-spinners/ClipLoader";


const override: CSSProperties = {
  position:'absolute',
  top:'50%',
  left:'10%',
};


function List({type, placeDetails,setType, setRating,setPlaceDetails}) {
 
  const selectedType = useRef();
  const selectedRatings = useRef();
  const [placeholder, setPlaceHolder] = useState("Attraction");


 

  const selectFormHandler = (event) => {
    event.preventDefault();

    if(selectedType.current.value !== type){
      setType(selectedType.current.value);
      setPlaceDetails(null)
        setPlaceHolder(type)
    }



  
    
    if(selectedRatings.current.value !== 'All'){
      setPlaceDetails(null)
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
          <option value='3.5'>Above 3.5</option>
            <option value='4.0'>Above 4.0</option>
            <option value='4.5'>Above 4.5</option>
          </select>
        </div>
      </form>
    </div>
    <div className={classes.list_body}>

      {placeDetails? <Places 
    placeDetails={placeDetails}
    /> : <ClipLoader color='#0765fd' loading={!placeDetails} cssOverride={override}   size={100} />}
      
    </div>
    
    
    </div>
  );
}

export default List;
