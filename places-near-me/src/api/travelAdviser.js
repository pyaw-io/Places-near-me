import axios from 'axios'


export const getPlacesData = async(type,sw,ne) => {
    try{
        const options = {
            method: 'GET',
            url: `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
            params: {
                bl_latitude: `${sw.lat}`,
                bl_longitude: `${sw.lng}`,
                tr_longitude: `${ne.lng}`,
                tr_latitude: `${ne.lat}`,
              },
            headers: {
              'X-RapidAPI-Key': process.env.REACT_APP_X_RAPIDAPI_KEY,
              'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
          };
          
          axios.request(options).then(function (response) {
              console.log(response.data);
              return 
          }).catch(function (error) {
              console.error(error);
          });

     

    } catch (error){
        console.log(error);

    }
}




