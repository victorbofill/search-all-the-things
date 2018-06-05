const BASE_URL = 'https://rickandmortyapi.com/api/';

const throwJson = json => { throw json ; };
const get = url => fetch(url)
  .then(r => r.ok ? r.json() : r.json().then(throwJson));

export function searchAPI({ search }, { page = 1 }, { searchType }) {
  const query = `?name=${search}`;
  const paging = `page=${page}`;

  return  get(`${BASE_URL}${searchType}${query}&${paging}`);
}

export function getCharacter(id) {
  const url = `${BASE_URL}character/${id}`;
  return get(url);
}

export function checkSearchAPI(response) {
  if(response.Response === 'False') throw response.Error;
  return response;
}
