import React, { Component } from 'react';
import styles from './Character.css';
import { Link } from 'react-router-dom';

export default class Characters extends Component {
  render() {
    const { name, image } = this.props.character;

    return (
      <li className={styles['results-li']}>
        <Link to={`/characters/${this.props.character.id}`}>
          <table>
            <thead>
              <tr>
                <th colSpan="2">
                  <h2>{name}</h2>
                  <img src={image}/>
                </th>
              </tr>
            </thead>
          </table>
        </Link>
      </li>
    );
  }
}