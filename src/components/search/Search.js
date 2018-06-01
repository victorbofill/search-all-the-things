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

    return (
      <form
        className={styles['search-form']}
        onSubmit={event => this.handleSubmit(event)}
      >
        <label>
          SQUANCH THE RICK AND MORTY API:
          <input value={search} onChange={this.handleChange}/>
        </label>
        <button>Squanch</button>
      </form>
    );
  }
}