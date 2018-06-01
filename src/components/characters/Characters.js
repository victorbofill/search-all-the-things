import React, { Component } from 'react';
import Search from '../search/Search';
import { searchCharacters } from '../../services/rmAPI';
import CharacterResults from './CharacterResults';
import Paging from '../search/Paging';

export default class Characters extends Component {
  state = {
    search: '',
    loading: false,
    characterResults: [],
    totalResults: null,
    page: 1,
    pages: null,
    error: null
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
    const { search, totalResults, page, error, loading, characterResults } = this.props;

    return (
      <section className="character-container">
        <fieldset>
          <div>
            <Search onSearch={this.handleCharacterSearch}/>
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