const BASE_URL = 'https://rickandmortyapi.com/api/';
const CHARACTERS_URL = 'character/';

const throwJson = json => { throw json ; };
const get = url => fetch(url)
  .then(r => r.ok ? r.json() : r.json().then(throwJson));

export function searchCharacters({ character }, { page = 1 }) {
  const search = `?name=${character}`;
  const paging = `page=${page}`;

  return  get(`${BASE_URL}${CHARACTERS_URL}${search}&${paging}`);
}