import React, { Component } from 'react';
import './Episode.css';

export default class Episodes extends Component {
  render() {
    const { name, air_date } = this.props.episode;

    return (
      <li>
        <h2>Name: {name}</h2>
        <p>Air Date: {air_date}</p>
      </li>
    );
  }
}