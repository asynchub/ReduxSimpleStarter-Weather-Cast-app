import { combineReducers } from 'redux';
import ReducerWeather from './reducer_weather';

const rootReducer = combineReducers({
  // a piece of state, that will be sent to all components or containers
  // after middleware processed it.
  weather: ReducerWeather
});

export default rootReducer;
