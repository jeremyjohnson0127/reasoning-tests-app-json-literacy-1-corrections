import React from 'react';
import NavBar from './NavBar';

import renderer from 'react-test-renderer';

describe('NavBar', () => {
  it('renders without crashing', () => {
    const rendered = renderer.create(<NavBar />).toJSON();

    expect(rendered).toBeTruthy();
  });
});
