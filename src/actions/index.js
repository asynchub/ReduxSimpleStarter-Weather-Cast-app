// to make AJAX request, use library axios, that contains just this functionality
import axios from 'axios';

// api key for AJAX request
const API_KEY = 'd4394d2e5e63ed9f05a72d71bae1f431';

// root url to handle request
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

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
  // get the request using axios, axios.get(url) returns a promise
  const request = axios.get(url);

  // console.log('Request: ', request);

  return {
    // to keep types consistent between action creators and reducers
    // pass the request to payload
    type: FETCH_WEATHER,
    payload: request
  }
}

// App flow:
// whenever user enters the search term, submits the form
// form calls the action creator, and passes in the city as argument
// action greator grabs the url, using city argument
// AJAX request is made by axios.get(url), returning promise into const request
// a promise is a data structure that does not yet contain any of our weather request data
// the promise (request) is passed on the payload key in action object
// theeeen, redux-promise is manipulating action in the middle, between action creator and reducer
// redux-promise is the middleware, that sees the incoming action, looks at specificly the payload property
// if the payload is a promise, then redux-promise stops the action entirely and then
// once the request finishes, redux-promise dispatches a new action of the same type, but
// with the payload of the resolved promise
// in other words it stops action, unwraps promise and sends data resulted from promise to reducer
