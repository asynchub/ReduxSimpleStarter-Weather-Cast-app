import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
    
    // whenever we have a callback, that we pass to JSX element, 
    // (instead of passing callback fat arrow function: to onChange event, for example),
    // and make reference to this keyword (like: onChange={this.onImputChange},
    // then we need to bind that callback to this excution context of 'this',
    // using .bind() function,
    // make it in constructor() definition
    // then 'this' will refer to this object
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    console.log(event.target.value);
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();

    // we need to go and fetch weather data with use of "binded and dispatched" action creator
    this.props.fetchWeather(this.state.term);
    // setState causes component/container to rerender, where it sets the value of input to state.term
    this.setState({term: ''});
  }

  render() {
    return (
      // controlled field is a form element where the value of the input is set by the state of component
      <form
        // prevent page reload and html document change upon form submitting
        // action by adding event handler to form element
        onSubmit={this.onFormSubmit}
        className="input-group">
        <input
          placeholder="Get five day forecast in your favorite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">
            Submit
          </button>
        </span>
      </form>
    )
  }
}

function mapDispatchToProps(dispatch) {
  // bindActionCreators makes action creator function to flow through middleware and reducers when called
  // and bind it to this container props
  return bindActionCreators( {fetchWeather: fetchWeather}, dispatch);
}

// mapDispatchToProps goes always into 2nd argument of connect function
exort default connect(null, mapDispatchToProps)(SearchBar);
