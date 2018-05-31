import React, { Component } from 'react';
import './Characters.css';

export default class Characters extends Component {
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
          Squanch Characters:
          <input value={search} onChange={this.handleChange}/>
        </label>
        <button>Squanch</button>
      </form>
    );
  }
}