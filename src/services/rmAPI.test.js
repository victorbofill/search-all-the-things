import { checkSearchAPI } from './rmAPI';

describe('search characters response', () => {
  it('returns json if the response is "true"', (() => {
    const data = { Response: 'True' };
    const output = checkSearchAPI(data);
    expect(output).toBe(data);
  }));
});