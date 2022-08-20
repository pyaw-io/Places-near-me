import axios from 'axios'


export const getPlacesData = async(type,rating,sw,ne) => {
    try{
        const options = {
            method: 'GET',
            url: `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
            params: {
                bl_latitude: `${sw.lat}`,
                tr_latitude: `${ne.lat}`,
                bl_longitude: `${sw.lng}`,
                tr_longitude: `${ne.lng}`,
                min_rating: `${rating}`,
                
              },
            headers: {
              'X-RapidAPI-Key': process.env.REACT_APP_X_RAPIDAPI_KEY,
              'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
          };
          
          const {data:{data}} = await axios.request(options)
          

          return data
     

    } catch (error){
        console.log(error);
        

    }
}




