import { useState } from "react";
import classes from "./Header.module.css";
import useOnclickOutside from "react-cool-onclickoutside";
import { IoSearch } from "react-icons/io5";



function Header({ data, ready, value, setValue,handleSelect }) {


  
// ///
//   const ref = useOnclickOutside(() => {
//     // When user clicks outside of the component, we can dismiss
//     // the searched suggestions by calling this method
//     clearSuggestions();
//   });

//   ////

  const handleInput = (e) => {
    // Update the keyword of the input element
    setValue(e.target.value);
  };

 

  const renderSuggestions = () =>
    data.map((suggestion) => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text },
      } = suggestion;

      return (
        <li key={place_id} onClick={handleSelect(suggestion)}>
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </li>
      );
    });

  return (
    <div className={classes.header} >
      <h2>Places Near Me</h2>
     
      <div className={classes.placesauto}   >
        <label>Explore new places</label>
        {/* <IoSearch/> */}
        <input
          value={value}
          onChange={handleInput}
          disabled={!ready}
          placeholder='Search'
        />
       
        {data.length > 0 && <ul>{renderSuggestions()}</ul>}
      </div>
    </div>
  );
}

export default Header;
