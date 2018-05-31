import React, { Component } from 'react';

export default class Paging extends Component {

  handlePage(increment) {
    const { page, onPage } = this.props;
    onPage({ page: page + increment });
  }

  render() {
    const { totalResults, page } = this.props;

    if(!totalResults) return <div>No results found.</div>;

    const totalPages = Math.ceil(totalResults / 20);

    return (
      <div>
        <p>Displaying first 20 results of {totalResults}.</p>
        <button onClick={() => this.handlePage(-1)} disabled={page <= 1}>prev</button>
        <p>Page {page} of {totalPages}</p>
        <button onClick={() => this.handlePage(+1)} disabled={page === totalPages}>next</button>
      </div>
    );
  }
}