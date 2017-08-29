import React, { Component } from 'react';

// google maps are wired to this project in index.html

// alternatively, this can be made with functional component and GoogleMapLoader
class GoogleMap extends Component {
  // 3rd party libraries interaction with React:
  
  // write componentDidMount function
  // when component is rendered, then componentDidMount is automatically called
  componentDidMount() {
    // create an embedded google map inside of document with google.maps.Map
    // google.maps.Map function takes reference (this.refs.map) to html element, where map to be rendered
    // second argument is options object: with zoom level, and center with: latitude and longitude properties
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        // lat and lon props assumed to be passed to this component
        lat: this.props.lat,
        lng: this.props.lon // lon property is returned from weather forecast site
      }
    });
  }
  
  // create render method, first
  render() {
    // this makes use of the ref system in react
    // ref system allows to get reference to html element, that is being rendered to the page
    // after this component GoogleMap has been rendered to the page, we can get direct 
    // reference to the div, that is created right here, by refering to this.refers.map
    return <div ref="map" />;
  }
}

export default GoogleMap;
// then integrate this component into row, that you need
