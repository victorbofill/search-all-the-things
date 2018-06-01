import React, { Component } from 'react';
// import { Link, Route } from 'react-router-dom';
import logo from './logo.jpg';

export default class Header extends Component {

  render() {
    return (
      <header>
        <img src={logo} />
      </header>
    );
  }
}