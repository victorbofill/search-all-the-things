import React, { Component } from 'react';

export default class Paging extends Component {

  handlePage(increment) {
    const { page, onPage } = this.props;
    onPage({ page: page + increment });
  }

  render() {
    const { totalResults, page, search } = this.props;

    const totalPages = Math.ceil(totalResults / 20);
    const lowRange = (20 * page - 20);
    let highRange = lowRange + 20;

    if((highRange) > totalResults) {highRange = totalResults;}

    return (
      <div>
        <p>Search &quot;{search}&quot; returned {totalResults} results. Displaying results {lowRange} through {highRange}</p>
        <p>Displaying page {page} of {totalPages}.</p>
        <button onClick={() => this.handlePage(-1)} disabled={page <= 1}>prev</button>
        <button onClick={() => this.handlePage(+1)} disabled={page === totalPages}>next</button>
      </div>
    );
  }
}