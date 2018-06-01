import React, { Component } from 'react';
import './Location.css';

export default class Locations extends Component {
  render() {
    const { name, type, dimension } = this.props.location;

    return (
      <li>
        <h2>Name: {name}</h2>
        <p>Type: {type}</p>
        <p>Dimension: {dimension}</p>
      </li>
    );
  }
}