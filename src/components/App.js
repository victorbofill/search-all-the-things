import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import logo from './logo.jpg';
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
    const { loading, characterResults, error, totalResults, page, character } = this.state;

    return (
      <main>
        <header><img src={logo} /></header>
        <fieldset>
          <div className="search-characters-container">
            <SearchCharacters onSearch={this.handleSearchCharacters}/>
          </div>
        </fieldset>
        <section>
          {character && 
                      <Paging
                        totalResults={totalResults}
                        page={page}
                        search={character}
                        onPage={this.handlePage}
                      />
          }
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