import React, { Component } from 'react';

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
        class-name="search-form"
        onSubmit={event => this.handleSubmit(event)}
      >
        <label>
          Squanch the Rick and Morty API:
          <input value={search} onChange={this.handleChange}/>
        </label>
        <button>Squanch</button>
      </form>
    );
  }
}