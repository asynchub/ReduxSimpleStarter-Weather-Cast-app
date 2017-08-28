// reducer to handle action, created by fetchWeather
// reducer always takes arguments: 
// state = null (defaulted to null)
// action
export default function ReducerWeather(state = null, action) {
  console.log("Action created: ", action);
  return state;
}
