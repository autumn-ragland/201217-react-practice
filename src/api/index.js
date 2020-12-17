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