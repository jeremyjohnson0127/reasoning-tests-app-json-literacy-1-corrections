import React from 'react';
import QuestionsPage from './QuestionsPage';

import renderer from 'react-test-renderer';

const defaultProps = {
  testId: 1,
  activeTab: 0,
  test: {
    name: 'foo',
    attachments: {},
    questions: [],
    pass_percentage: 10,
    time_limit: 10,
  },
  initAnswers: f => f,
  setTab: f => f,
};

describe('QuestionsPage', () => {
  it('renders without crashing', () => {
    const rendered = renderer.create(<QuestionsPage {...defaultProps} />).toJSON();

    expect(rendered).toBeTruthy();
  });
});

