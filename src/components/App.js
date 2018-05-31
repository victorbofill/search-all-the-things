import React, { Component } from 'react';
import styles from './App.css';
import { searchCharacters } from '../services/rmAPI';
import SearchCharacters from './SearchCharacters';
import CharacterResults from './CharacterResults';

export default class App extends Component {
  state = {
    loading: false,
    character: '',
    error: null,
    page: 1,
    characterResults: []
  };

  searchCharacters = () => {
    const { character, page } = this.state;

    this.setState({ loading: true });

    searchCharacters({ character }, { page })
      .then(({ results }) => {
        this.setState({ characterResults: results, error: null });
      }, error => {
        this.setState({ error });
      })
      .then(() => this.setState({ loading: false }));
  };

  handleSearchCharacters = ({ search }) => {
    this.setState({ character: search }, this.searchCharacters);
  };

  render() {
    const { loading, characterResults, error } = this.state;

    return (
      <main>
        <fieldset>
          <div className="search-characters-container">
            <SearchCharacters onSearch={this.handleSearchCharacters}/>
          </div>
        </fieldset>
        <section className="notifications">
          {loading && <div>Loading...</div>}
          {error && <div>Error: {error.message}</div>}
        </section>
        <section className="character-results">
          <CharacterResults characterResults={characterResults}/>
        </section>
      </main>
    );
  }
}