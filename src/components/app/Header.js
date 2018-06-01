import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.jpg';

export default class Header extends Component {

  render() {
    return (
      <header>
        <img src={logo} />
        <ul>
          <li><Link to="/characters">Characters</Link></li>
          <li><Link to="/episodes">Episodes</Link></li>
          <li><Link to="/locations">Locations</Link></li>
        </ul>
      </header>
    );
  }
}