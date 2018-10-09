import reducer from './tab';
import expect from 'expect';

describe('tab reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(0);
  });

  it('should return the state', () => {
    expect(reducer(5, {})).toEqual(5);
  });

  it('should handle "tab:set"', () => {
    const action = {
      type: 'tab:set',
      payload: 5 
    };

    expect(reducer(0, action)).toEqual(5);
  });
});
