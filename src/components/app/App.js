import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Header from './Header';
import Characters from '../characters/Characters';

import './App.css';

// TODO:
// Copy/create search bars for locations and episodes
// Create router to switch between search criteria, with nav bar
// Search functionality for all three criteria

export default class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Header />
          <main>
            <Switch>
              <section>
                <Route path="/characters" component={Characters}/>
                <Redirect to="/characters"/>
              </section>
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}