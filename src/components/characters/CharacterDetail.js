import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getCharacter } from '../../services/rmAPI';

import styles from './CharacterDetails.css';

export default class CharacterDetail extends Component {

  static propTypes = {
    characterID: PropTypes.string.isRequired,
    history: PropTypes.object
  };

  state = {
    character: null
  };

  componentDidMount() {
    getCharacter(this.props.characterID)
      .then(character => this.setState({ character }));
  }

  extractEpisodeNumber(episodeURL) {
    return episodeURL.split('').splice(40).join('');
  }

  render() {
    const { character } = this.state;

    if(character === null) return null;

    return (
      <div className={styles['character-detail']}>
        <table>
          <thead>
            <tr>
              <th colSpan="2">
                <h2>{name}</h2>
                <img src={character.image}/>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>SPECIES</td>
              <td>{character.species}</td>
            </tr>
            <tr>
              <td>ORIGIN</td>
              <td>{character.origin.name}</td>
            </tr>
            <tr>
              <td>LOCATION</td>
              <td>{character.location.name}</td>
            </tr>
          </tbody>
        </table>

        <ul>
          <li>EPISODES:</li>
          {character.episode.map((episode, i) => (
            <li key={i}>
              <a href={`/episodes/${this.extractEpisodeNumber(episode)}`}>
                EPISODE {this.extractEpisodeNumber(episode)}
              </a>
            </li>))}
        </ul>

      </div>
    );
  }
}