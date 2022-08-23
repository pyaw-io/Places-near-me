
import { IoLocationSharp } from "react-icons/io5";

import { ratingStars } from "../helper/helper";
import classes from "./Places.module.css";

import Card from "../ui/Card";

const Places = ({placeDetails}) => {


  return (
    <div>
      {placeDetails && (
        <div className={classes.places}>
          {placeDetails?.map((place, i) => (
            <Card className={classes.places_card} key={i}>
              {place.photo &&  <img src={place.photo.images.medium.url} /> }
              <div className={classes.placesdetails}>
                <h4>{place.name}</h4>
                <div>
                  <div>
                    <span>{place.rating && ratingStars(place.rating)}</span>

                    <span>{`${place.num_reviews} reviews`}</span>
                  </div>
                  <div>
                    <span>Price</span>
                    <span>{place.price_level}</span>
                  </div>
                  <div>
                    <span>Ranking</span>
                    <span>{place.ranking_position}</span>
                  </div>
                  <div className={classes.menu}>
                    {place.cuisine && place.cuisine.map((item, i) => (
                      <span key={i}>{item.name}</span>
                    ))}
                  </div>
                  <div>
                    <span>
                      <IoLocationSharp />
                    </span>
                    <span>{place.address?place.address : place.location_string}</span>
                  </div>
                
                  <div className={classes.menu}>
                    <a href={place.web_url} target="_blank">
                      Trip Adviser
                    </a>
                    <a href={place.website} target="_blank">
                      Website
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default Places;
