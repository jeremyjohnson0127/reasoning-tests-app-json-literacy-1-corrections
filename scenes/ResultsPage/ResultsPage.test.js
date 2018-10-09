import React from 'react';
import ResultsPage from './ResultsPage';

import renderer from 'react-test-renderer';

const defaultProps = {
  activeTab: 0,
  testId: 0,
  test: {
    name: 'foo',
    attachments: {},
    questions: [],
    pass_percentage: 10,
    time_limit: 10,
  },
  answers: {},
  setTab: f => f
};

describe('ResultsPage', () => {
  it('renders without crashing', () => {
    const rendered = renderer.create(<ResultsPage {...defaultProps} />).toJSON();

    expect(rendered).toBeTruthy();
  });
});

