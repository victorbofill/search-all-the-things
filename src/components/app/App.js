import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Header from './Header';
import Home from '../home/Home';
import Characters from '../characters/Characters';
import Episodes from '../episodes/Episodes';
import Locations from '../locations/Locations';

import './App.css';

// TODO:
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
                <Route strict path="/" component={Home}/>
                <Route path="/characters" component={Characters}/>
                <Route path="/episodes" component={Episodes}/>
                <Route path="/locations" component={Locations}/>
                <Redirect to="/"/>
              </section>
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}