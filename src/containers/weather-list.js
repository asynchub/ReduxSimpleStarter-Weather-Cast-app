import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Chart from '../components/chart';
// import fetchWeather from '../actions/index';

class WeatherList extends Component {

  // function to render weather list of cities
  // takes the argument for every call a particular city's data
  renderWeather(cityData) {
    const cityName = cityData.city.name;
    // extract temperatures and make array of them
    const temperatures = cityData.list.map((data) => data.main.temp - 273);
    const pressures = cityData.list.map((data) => data.main.pressure);
    const humidities = cityData.list.map((data) => data.main.humidity);
    // console.log(temps);

    // the key to be added to the top level element of the list
    return(
      <tr key={cityName}>
        <td>{cityName}</td>
        <td>
          <Chart data={temperatures} color="blue" />
        </td>
        <td>
          <Chart data={pressures} color="orange" />
        </td>
        <td>
          <Chart data={humidities} color="grey" />
        </td>
      </tr>
    );
  }
  // When the search bar is submitted, the application state is updated after
  // the fetchWeather request is resolved.  Whenever the application state is
  // updated, all components in the app will automatically update- this is
  // when 'renderWeather' will be called again. (S. Grider)

  render() {
    return(
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}
// weateher prop decription:
// weather is an array of cities
// city has
// list of weather data
// to build the rows of table, we need to map over this.props.weather
// when we map over that array, we get one city per row

// ES6 syntax for mapStateToProps:
function mapStateToProps({ weather }) {
  // {weather} is same as: const weather = state.weather,
  // if state prop would be passed to mapStateToProps
  // here return piece of state as from /reducers/index
  return { weather }; // {weather} === { weather: weather };
}

/*
function mapStateToProps(state) {
  // return piece of state as from /reducers/index
  return { weather: state.weather };
}
*/

// connect component WeatherList with mapStateToProps
export default connect(mapStateToProps)(WeatherList);
