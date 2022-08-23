import { MdStar } from "react-icons/md";  
  
  
  //function for displaying stars
  export const ratingStars = (num) => {
    const number = Math.round(num);
    const totalStars = Array(number)
      .fill("a")
      .map((_, i) => <MdStar key={i}></MdStar>);
    return totalStars;
  };