import React, { Component } from 'react';
import styles from './App.css';
import { searchCharacters } from '../services/rmAPI';
import Characters from './Characters';

export default class App extends Component {
  state = {
    loading: false,
    character: '',
    name: null,
    species: null,
    origin: null,
    image: null,
    location: null,
    error: null,
    page: 1
  };

  searchCharacters = () => {
    const { character, page } = this.state;

    this.setState({ loading: true });

    searchCharacters({ character }, { page })
      .then(({ name, species, origin, image, location }) => {
        this.setState({ name, species, origin, image, location, error: null });
      }, error => {
        this.setState({ error });
      })
      .then(() => this.setState({ loading: false }));
  };

  handleSearchCharacters = ({ search }) => {
    this.setState({ character: search }, this.searchCharacters);
  };

  render() {
    const { loading } = this.state;
    
    return (
      <main>
        <fieldset>
          <div className="search-characters-container">
            <Characters onSearch={this.handleSearchCharacters}/>
          </div>
        </fieldset>
        <section className="loading">
          {loading && <div>Loading...</div>}
        </section>
      </main>
    );
  }
}