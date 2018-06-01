const BASE_URL = 'https://rickandmortyapi.com/api/';
const CHARACTERS_URL = 'character/';
const EPISODES_URL = 'episode/';
const LOCATION_URL = 'location/';

const throwJson = json => { throw json ; };
const get = url => fetch(url)
  .then(r => r.ok ? r.json() : r.json().then(throwJson));

export function searchCharacters({ search }, { page = 1 }) {
  const query = `?name=${search}`;
  const paging = `page=${page}`;

  return  get(`${BASE_URL}${CHARACTERS_URL}${query}&${paging}`);
}

export function searchEpisodes({ search }, { page = 1 }) {
  const query = `?name=${search}`;
  const paging = `page=${page}`;

  return get(`${BASE_URL}${EPISODES_URL}${query}&${paging}`);
}

export function searchLocations({ search }, { page = 1 }) {
  const query = `?name=${search}`;
  const paging = `page=${page}`;

  return get(`${BASE_URL}${LOCATION_URL}${query}&${paging}`);
}