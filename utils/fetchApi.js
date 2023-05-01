import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com"



  export const fetchApi = async (url) => {
    const {data}= await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': 'fb4d2eb4d3msh79aa725ac9fba7bp1ea1ecjsn0973925282e4',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
  })
  return data;
}
