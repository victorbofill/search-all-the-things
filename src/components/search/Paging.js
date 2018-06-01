import React, { Component } from 'react';
import styles from './Paging.css';

export default class Paging extends Component {

  handlePage(increment) {
    const { page, onPage } = this.props;
    onPage({ page: page + increment });
  }

  render() {
    const { totalResults, page, search } = this.props;

    const totalPages = Math.ceil(totalResults / 20);
    let lowRange = (20 * page - 20);
    let highRange = lowRange + 20;

    if(lowRange === 0) {lowRange = 1;}
    if((highRange) > totalResults) {highRange = totalResults;}

    return (
      <div className={styles.paging}>
        <p>SEARCH &quot;{search}&quot; RETURNED {totalResults} RESULTS. DISPLAYING RESULTS {lowRange} THROUGH {highRange}</p>
        <p>DISPLAYING PAGE {page} OF {totalPages}.</p>
        <button onClick={() => this.handlePage(-1)} disabled={page <= 1}>prev</button>
        <button onClick={() => this.handlePage(+1)} disabled={page === totalPages}>next</button>
      </div>
    );
  }
}