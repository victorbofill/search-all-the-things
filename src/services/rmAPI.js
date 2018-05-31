const BASE_URL = 'https://rickandmortyapi.com/api/';
const CHARACTERS_URL = 'character/';
const EPISODES_URL = 'episode/';
const LOCATION_URL = 'location/';

const throwJson = json => { throw json ; };
const get = url => fetch(url)
  .then(r => r.ok ? r.json() : r.json().then(throwJson));

export function searchCharacters({ character }, { page = 1 }) {
  const search = `?name=${character}`;
  const paging = `page=${page}`;

  return  get(`${BASE_URL}${CHARACTERS_URL}${search}&${paging}`);
}

export function searchEpisodes({ episode }, { page = 1 }) {
  const search = `?name=${episode}`;
  const paging = `page=${page}`;

  return get(`${BASE_URL}${EPISODES_URL}${search}&${paging}`);
}

export function searchLocations({ location }, { page = 1 }) {
  const search = `?name=${location}`;
  const paging = `page=${page}`;

  return get(`${BASE_URL}${LOCATION_URL}${search}&${paging}`);
}