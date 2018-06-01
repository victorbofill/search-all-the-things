import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.css';

export default class Header extends Component {

  render() {
    return (
      <header>
        <h1>THE RICK AND MORTY API SEARCHER</h1>
        <ul>
          <li className={styles['navbar-li']}><Link to="/characters">CHARACTERS</Link></li>
          <li className={styles['navbar-li']}><Link to="/episodes">EPISODES</Link></li>
          <li className={styles['navbar-li']}><Link to="/locations">LOCATIONS</Link></li>
        </ul>
      </header>
    );
  }
}