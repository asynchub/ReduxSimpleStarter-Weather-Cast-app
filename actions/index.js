// to make AJAX request, use library axios, that contains just this functionality
import axios from 'axios';

// api key for AJAX request
const API_KEY = 'd4394d2e5e63ed9f05a72d71bae1f431';

// root url to handle request
const ROOT_URL = `http://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

// define variable, assign the string and export this to use in reducers
// to keep types consistent between action creators and reducers
export const FETCH_WEATHER = 'FETCH_WEATHER';

// to change application state and add data we need to dispatch (call)
// an action that is responsible for AJAX request
// make an action creator, that makes API request to go fetch the data
// pass the city as an argument to this action creator
export function fetchWeather(city) {
  // api call is made by rules for this weather site:
  // api.openweathermap.org/data/2.5/forecast?q={city name},{country code}
  const url = `${ROOT_URL}&q=${city},EE`
  // get the request using axios
  const request = axios.get(url);

  return {
    // to keep types consistent between action creators and reducers
    // pass the request to payload
    type: FETCH_WEATHER,
    payload: request
  }
}
