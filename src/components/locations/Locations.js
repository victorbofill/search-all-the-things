import React, { Component } from 'react';
import Search from '../search/Search';
import { searchLocations } from '../../services/rmAPI';
import LocationResults from './LocationResults';
import Paging from '../search/Paging';

export default class Locations extends Component {
  state = {
    search: '',
    page: 1,
    loading: false,
    locationResults: [],
    error: null,
    totalResults: null,
    pages: null
  };

  handleLocationSearch = ({ search }) => {
    this.setState({ search: search }, this.locationSearch);
  };

  locationSearch = () => {
    const { search, page } = this.state;

    this.setState({ loading: true });

    searchLocations({ search }, { page })
      .then(({ info, results }) => {
        this.setState({ locationResults: results, error: null, totalResults: info.count, pages: info.pages });
      }, error => {
        this.setState({ error });
      })
      .then(() => this.setState({ loading: false }));
  };

  handlePage = ({ page }) => {
    this.setState({ page }, this.locationSearch);
  };

  render() {
    const { search, totalResults, page, error, loading, locationResults } = this.state;

    return (
      <section className="location-container">
        <fieldset>
          <div>
            <Search onSearch={this.handleLocationSearch}/>
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
          {locationResults &&
            <LocationResults locationResults={locationResults}/>
          }
        </section>
      </section>
    );
  }
}