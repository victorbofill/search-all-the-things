import React, { Component } from 'react';
import Episode from './Episode';

export default class Results extends Component {
  render() {
    const {  episodeResults  } = this.props;

    return (
      <ul>
        {episodeResults.map((episode, i) => (
          <Episode key={i} episode={episode}/>
        ))}
      </ul>
    );
  }
}