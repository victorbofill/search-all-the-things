import React, { Component } from 'react';
import styles from './Home.css';

export default class Home extends Component {
  render() {
    return (
      <p><a className={styles['api-link']} href="https://rickandmortyapi.com/">VISIT THE RICK AND MORTY API HOMEPAGE</a></p>
    );
  }
}