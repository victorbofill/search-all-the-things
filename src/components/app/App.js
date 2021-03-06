import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Header from './Header';
import Home from '../home/Home';
import Characters from '../characters/Characters';
import CharacterDetail from '../characters/CharacterDetail';
import Episodes from '../episodes/Episodes';
import Locations from '../locations/Locations';
import EpisodeDetail from '../episodes/EpisodeDetail';

import './App.css';

export default class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Header />
          <main>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/characters/:id" render={({ match }) => {
                return <CharacterDetail characterID={match.params.id}/>;
              }}/>
              <Route path="/characters" component={Characters}/>
              <Route path="/episodes/:id" component={EpisodeDetail}/>
              <Route path="/episodes" component={Episodes}/>
              <Route exact path="/locations" component={Locations}/>
              <Redirect to="/"/>
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}