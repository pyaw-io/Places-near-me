import axios from 'axios'

export const getPlacesData = async() => {
    try{

        const options = {
            method: 'GET',
            url: 'https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete',
            params: {query: 'eiffel tower', lang: 'en_US', units: 'km'},
            headers: {
              'X-RapidAPI-Key': 'aacba3c50emshad74c8d7408f0b7p10e3cajsnd4215f33b1ad',
              'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
          };
          
          axios.request(options).then(function (response) {
              console.log(response.data);
          }).catch(function (error) {
              console.error(error);
          });

    } catch (error){
        console.log(error);

    }
}