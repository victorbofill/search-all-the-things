import React, { Component } from 'react';
import styles from './Episode.css';

export default class Episodes extends Component {
  render() {
    const { name, air_date } = this.props.episode;

    return (
      <li className={styles['results-li']}>
        <h2>Name: {name}</h2>
        <p>Air Date: {air_date}</p>
      </li>
    );
  }
}