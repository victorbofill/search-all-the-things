import React, { Component } from 'react';
import Location from './Location';

export default class Results extends Component {
  render() {
    const {  locationResults  } = this.props;

    return (
      <ul>
        {locationResults.map((location, i) => (
          <Location key={i} location={location}/>
        ))}
      </ul>
    );
  }
}