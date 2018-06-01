import React, { Component } from 'react';
import Paging from './Paging';
import { searchCharacters } from '../services/rmAPI';
import SearchCharacters from './SearchCharacters';
import CharacterResults from './CharacterResults';
import logo from './logo.jpg';
import './App.css';
// import { searchCharacters, searchEpisodes, searchLocations } from '../services/rmAPI';
// import { BrowserRouter as Router } from 'react-router-dom';

// TODO:
// Clean up search code; remove 'character' from everything that doesn't need it
// Copy/create search bars for locations and episodes
// Create router to switch between search criteria, with nav bar
// Search functionality for all three criteria

export default class App extends Component {
  state = {
    loading: false,
    character: '',
    episode: '',
    location: '',
    error: null,
    page: 1,
    characterResults: [],
    totalResults: null,
    pages: null
  };

  characterSearch = () => {
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

  handleCharacterSearch = ({ search }) => {
    this.setState({ character: search }, this.characterSearch);
  };

  handlePage = ({ page }) => {
    this.setState({ page }, this.characterSearch);
  };

  render() {
    const { loading, characterResults, error, totalResults, page, character } = this.state;

    return (
      <main>
        <header><img src={logo} /></header>


        <fieldset>
          <div className="search-characters-container">
            <SearchCharacters onSearch={this.handleCharacterSearch}/>
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