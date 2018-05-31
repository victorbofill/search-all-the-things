import React, { Component } from 'react';
import Character from './Character';

export default class Results extends Component {
  render() {
    const {  characterResults  } = this.props;

    return (
      <ul>
        {characterResults.map((character, i) => (
          <Character key={i} character={character}/>
        ))}
      </ul>
    );
  }
}