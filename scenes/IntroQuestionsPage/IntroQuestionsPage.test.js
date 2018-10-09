import React from 'react';
import IntroQuestionsPage from './IntroQuestionsPage';

import renderer from 'react-test-renderer';

describe('IntroQuestionsPage', () => {
  it('renders without crashing', () => {
    const rendered = renderer.create(<IntroQuestionsPage />).toJSON();

    expect(rendered).toBeTruthy();
  });
});

