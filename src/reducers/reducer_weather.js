// consistency of type value for action
import { FETCH_WEATHER } from '../actions/index';

// reducer to handle action, created by fetchWeather
// reducer always takes arguments:
// state = [] (defaulted to empty array, because array is manipulated here)
// action is passed to reflect that in the state
// the thing we care about is action.payload.data
export default function(state = [], action) {
  // console.log('Action received: ', action);
  switch (action.type) {
    case FETCH_WEATHER:
    // dont do this here: state.push(action.payload.data);
    // in other words: do not mutate state;
    // better: return new state, manipulating old one
    // better: state.concat([action.payload.data]), because it returns another state
    // ES6 syntax, cool: [ action.payload.data, ...state ] === state.concat([action.payload.data])
    return [ action.payload.data, ...state ];
    // takes an array with new first value and inserts ...other elements to this array
  }
  return state;
}
