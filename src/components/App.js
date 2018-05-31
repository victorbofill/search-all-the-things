import React, { Component } from 'react';
import styles from './App.css';
import Paging from './Paging';
import { searchCharacters } from '../services/rmAPI';
import SearchCharacters from './SearchCharacters';
import CharacterResults from './CharacterResults';

export default class App extends Component {
  state = {
    loading: false,
    character: '',
    error: null,
    page: 1,
    characterResults: [],
    totalResults: null,
    pages: null
  };

  searchCharacters = () => {
    const { character, page } = this.state;

    this.setState({ loading: true });

    searchCharacters({ character }, { page })
      .then(({ info, results }) => {
        this.setState({ characterResults: results, error: null, totalResults: info.count, pages: info.pages });
      }, error => {
        this.setState({ error });
      })
      .then(() => this.setState({ loading: false }));
  };

  handleSearchCharacters = ({ search }) => {
    this.setState({ character: search }, this.searchCharacters);
  };

  handlePage = ({ page }) => {
    this.setState({ page }, this.searchCharacters);
  };

  render() {
    const { loading, characterResults, error, totalResults, page } = this.state;

    return (
      <main>
        <fieldset>
          <div className="search-characters-container">
            <SearchCharacters onSearch={this.handleSearchCharacters}/>
          </div>
        </fieldset>
        <section>
          <Paging
            totalResults={totalResults}
            page={page}
            onPage={this.handlePage}
          />
        </section>
        <section className="notifications">
          {loading && <div className="loading">Loading...</div>}
          {error && <div>Error: {error.message}</div>}
        </section>
        <section className="character-results">
          <CharacterResults characterResults={characterResults}/>
        </section>
      </main>
    );
  }
}