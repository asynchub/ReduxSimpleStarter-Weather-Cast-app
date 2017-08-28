import React, { Component } from 'react';


export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };

    // bind onInputChange to this object excution context
    // instead of passing callback fat arrow function to onChange event
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    console.log(event.target.value);
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();

    // we need to go and fetch weather data
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
