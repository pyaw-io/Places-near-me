import React from 'react'
import classes from './Marker.module.css'
import { ratingStars } from '../helper/helper';
import { FaMapMarkerAlt } from "react-icons/fa";




const Marker = ( { description,rating} ) => {

  return  <div  className={classes.tooltip}>

    
    <FaMapMarkerAlt className={classes.pin} />
  <div className={classes.description}>
      <p>{description} <br></br> {ratingStars(rating)}</p>
      </div>
    
    
    </div>
  };
  
  export default Marker
  
