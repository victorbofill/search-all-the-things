import React, { Component } from 'react';
import { getEpisode } from '../../services/rmAPI';

import styles from './EpisodeDetail.css';

export default class EpisodeDetail extends Component {

  state = {
    episodeID: this.props.match.params.id,
    episode: null,
    error: null
  };

  componentDidMount() {
    getEpisode(this.state.episodeID)
      .then(episode => this.setState({ episode }))
      .catch(error => console.log(error));
  }

  render() {
    const { episode } = this.state;

    if(episode === null) return null;

    return (
      <div className={styles['episode-detail']}>
        <h2>{episode.name}</h2>
        <p>{episode.episode}</p>
        <p>Air Date: {episode.air_date}</p>
      </div>
    );
  }
}