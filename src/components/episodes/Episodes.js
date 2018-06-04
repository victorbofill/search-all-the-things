import React, { Component } from 'react';
import Search from '../search/Search';
import { searchEpisodes } from '../../services/rmAPI';
import EpisodeResults from './EpisodeResults';
import Paging from '../search/Paging';

export default class Episodes extends Component {
  state = {
    search: '',
    page: 1,
    loading: false,
    episodeResults: [],
    error: null,
    totalResults: null,
    pages: null,
    searchType: 'EPISODES'
  };

  handleEpisodeSearch = ({ search }) => {
    this.setState({ search: search }, this.episodeSearch);
  };

  episodeSearch = () => {
    const { search, page } = this.state;

    this.setState({ loading: true });

    searchEpisodes({ search }, { page })
      .then(({ info, results }) => {
        this.setState({ episodeResults: results, error: null, totalResults: info.count, pages: info.pages });
      }, error => {
        this.setState({ error });
      })
      .then(() => this.setState({ loading: false }));
  };

  handlePage = ({ page }) => {
    this.setState({ page }, this.episodeSearch);
  };

  render() {
    const { search, totalResults, page, error, loading, episodeResults, searchType } = this.state;

    return (
      <section className="episode-container">
        <fieldset>
          <div>
            <Search onSearch={this.handleEpisodeSearch} searchType={searchType}/>
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
          {episodeResults &&
            <EpisodeResults episodeResults={episodeResults}/>
          }
        </section>
      </section>
    );
  }
}