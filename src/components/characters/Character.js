import React, { Component } from 'react';
import styles from './Character.css';

export default class Characters extends Component {
  render() {
    const { name, species, origin, location, image } = this.props.character;

    return (
      <li className={styles['results-li']}>
        <table>
          <thead>
            <tr>
              <th colspan="2">
                <h2>{name}</h2>
                <img src={image}/>
              </th>
            </tr>
          </thead>
          <tr>
            <td>SPECIES</td>
            <td>{species}</td>
          </tr>
          <tr>
            <td>ORIGIN</td>
            <td>{origin.name}</td>
          </tr>
          <tr>
            <td>LAST KNOWN LOCATION</td>
            <td>{location.name}</td>
          </tr>
        </table>
      </li>
    );
  }
}