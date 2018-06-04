import React, { Component } from 'react';
import styles from './Search.css';

export default class Search extends Component {
  state = {
    search: ''
  };

  handleChange = ({ target }) => {
    this.setState({ search: target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSearch(this.state);
  };

  render() {
    const { search } = this.state;
    const { searchType } = this.props;

    return (
      <form
        className={styles['search-form']}
        onSubmit={event => this.handleSubmit(event)}
      >
        <label>
          SQUANCH {searchType}:
          <input value={search} onChange={this.handleChange}/>
        </label>
        <button>Squanch</button>
      </form>
    );
  }
}