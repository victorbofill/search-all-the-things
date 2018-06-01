import React, { Component } from 'react';
import styles from './Location.css';

export default class Locations extends Component {
  render() {
    const { name, type, dimension } = this.props.location;

    return (
      <li className={styles['results-li']}>
        <h2>Name: {name}</h2>
        <p>Type: {type}</p>
        <p>Dimension: {dimension}</p>
      </li>
    );
  }
}