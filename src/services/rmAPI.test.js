import { checkSearchCharacters, checkSearchEpisodes, checkSearchLocations } from './rmAPI';

describe('search characters response', () => {
  it('returns json if the characters response is "true"', (() => {
    const data = { Response: 'True' };
    const output = checkSearchCharacters(data);
    expect(output).toBe(data);
  }));
});

describe('search episodes response', () => {
  it('returns json if the episodes response is "true"', (() => {
    const data = { Response: 'True' };
    const output = checkSearchEpisodes(data);
    expect(output).toBe(data);
  }));
});

describe('search locations response', () => {
  it('returns json if the locations response is "true"', (() => {
    const data = { Response: 'True' };
    const output = checkSearchLocations(data);
    expect(output).toBe(data);
  }));
});