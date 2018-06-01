import React, { Component } from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
import logo from './logo.jpg';
import './App.css';
import Characters from '../characters/Characters';
// import { searchCharacters, searchEpisodes, searchLocations } from '../services/rmAPI';

// TODO:
// Copy/create search bars for locations and episodes
// Create router to switch between search criteria, with nav bar
// Search functionality for all three criteria

export default class App extends Component {

  render() {
    return (
      <main>
        <header><img src={logo} /></header>

        <section>
          <Characters />
        </section>

      </main>
    );
  }
}