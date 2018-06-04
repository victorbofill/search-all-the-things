import React, { Component } from 'react';
import Search from '../search/Search';
import { searchCharacters } from '../../services/rmAPI';
import CharacterResults from './CharacterResults';
import Paging from '../search/Paging';

export default class Characters extends Component {
  state = {
    search: '',
    page: 1,
    loading: false,
    characterResults: [],
    error: null,
    totalResults: null,
    pages: null,
    searchType: 'CHARACTERS'
  };

  handleCharacterSearch = ({ search }) => {
    this.setState({ search: search }, this.characterSearch);
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

  handlePage = ({ page }) => {
    this.setState({ page }, this.characterSearch);
  };

  render() {
    const { search, totalResults, page, error, loading, characterResults, searchType } = this.state;

    return (
      <section className="character-container">
        <fieldset>
          <div>
            <Search onSearch={this.handleCharacterSearch} searchType={searchType}/>
          </div>
        </fieldset>

        <section>
          {loading && <div className="loading">Loading...</div>}
          {error && <div>Error: {error.message}</div>}
        </section>

        <section>
          {search && 
            <Paging
              totalResults={totalResults}
              page={page}
              search={search}
              onPage={this.handlePage}
            />
          }
        </section>

        <section>
          {characterResults &&
            <CharacterResults characterResults={characterResults}/>
          }
        </section>
      </section>
    );
  }
}