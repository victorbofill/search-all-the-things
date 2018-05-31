import React, { Component } from 'react';

export default class Characters extends Component {
  render() {
    const { name, species, origin, location, image } = this.props.character;

    return (
      <li>
        <h2>Name: {name}</h2>
        <p>Species: {species}</p>
        <p>Origin: {origin.name}</p>
        <p>Last Known Location: {location.name}</p>
        <img src={image}/>
      </li>
    );
  }
}