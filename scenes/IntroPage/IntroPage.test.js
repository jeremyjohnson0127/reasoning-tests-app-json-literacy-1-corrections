import React from 'react';
import IntroPage from './IntroPage';

import renderer from 'react-test-renderer';

describe('IntroPage', () => {
  it('renders without crashing', () => {
    const rendered = renderer.create(<IntroPage />).toJSON();

    expect(rendered).toBeTruthy();
  });
});

