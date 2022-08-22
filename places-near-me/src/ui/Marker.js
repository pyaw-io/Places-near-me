import React from 'react'
import classes from './Marker.module.css'
import { FaMapMarkerAlt } from "react-icons/fa";




const Marker = ({ text }) => {

  return  <FaMapMarkerAlt className={classes.pin} />
  };
  
  export default Marker
  
