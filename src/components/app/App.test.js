import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import App from './App';

describe('App', () => {
  test('with home', () => {
    const wrapper = shallow(<App home={true}/>);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});