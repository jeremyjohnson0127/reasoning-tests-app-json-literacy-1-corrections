import React from 'react';
import MainPage from './MainPage';

import renderer from 'react-test-renderer';

describe('MainPage', () => {
  it('renders without crashing', () => {
    const rendered = renderer.create(<MainPage tests={[]} />).toJSON();

    expect(rendered).toBeTruthy();
  });
});

