import React, { Component } from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
import logo from './logo.jpg';
import './App.css';
import Search from './Search';
import { searchCharacters } from '../services/rmAPI';
// import { searchCharacters, searchEpisodes, searchLocations } from '../services/rmAPI';
import CharacterResults from './CharacterResults';
import Paging from './Paging';

// TODO:
// Copy/create search bars for locations and episodes
// Create router to switch between search criteria, with nav bar
// Search functionality for all three criteria

export default class App extends Component {
  state = {
    search: '',
    page: 1,
    characterResults: [],
    totalResults: null,
    pages: null,
    loading: false,
    error: null
  };

  characterSearch = () => {
    const { search, page } = this.state;

    this.setState({ loading: true });

    searchCharacters({ search }, { page })
      .then(({ info, results }) => {
        this.setState({ characterResults: results, error: null, totalResults: info.count, pages: info.pages });
      }, error => {
        this.setState({ error });
      })
      .then(() => this.setState({ loading: false }));
  };

  handleCharacterSearch = ({ search }) => {
    this.setState({ search: search }, this.characterSearch);
  };

  handlePage = ({ page }) => {
    this.setState({ page }, this.characterSearch);
  };

  render() {
    const { loading, characterResults, error, totalResults, page, character } = this.state;

    return (
      <main>
        <header><img src={logo} /></header>

        <section className="character-container">
          <fieldset>
            <div>
              <Search onSearch={this.handleCharacterSearch}/>
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
          <section>
            {loading && <div className="loading">Loading...</div>}
            {error && <div>Error: {error.message}</div>}
          </section>
          <section>
            <CharacterResults characterResults={characterResults}/>
          </section>
        </section>

      </main>
    );
  }
}