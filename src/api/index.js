import axios from 'axios';

// const url = 'https://api.covidtracking.com/v1/us/daily.json';
const state = "ca";

export const fetchData = async() => {
    try {
        const  data  = await axios.get(`https://api.covidtracking.com/v1/states/${state}/current.json`);
        // console.log(data.data);
        const modifiedData = {
          positive : data.data.positive,
          hospitalizedIncrease : data.data.hospitalizedIncrease,
          death : data.data.death,
          dateChecked : data.data.dateChecked
        }
        return modifiedData;
        // return data.map(({ positive, recovered, death, dateChecked }) => ({ positive, recovered, death, dateChecked }));
        
    } catch (error) {
      return error;
    }
}

export const fetchStates = async () => {
  try{
    const response = await axios.get('https://gist.githubusercontent.com/mshafrir/2646763/raw/8b0dbb93521f5d6889502305335104218454c2bf/states_titlecase.json');
    return response.data.map((state) => state.abbreviation.toLowerCase());
  } catch(error){
    console.lgo(error);
  }
}