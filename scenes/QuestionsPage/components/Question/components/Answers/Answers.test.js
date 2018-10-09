import React from 'react';
import Answers from './Answers';

import renderer from 'react-test-renderer';

const defaultProps = {
  answers: [],
  answerId: 0,
  questionId: 0,
  addAnswer: f => f,
  setTab: f => f
};

describe('Answers', () => {
  it('renders without crashing', () => {
    const rendered = renderer.create(<Answers {...defaultProps} />).toJSON();

    expect(rendered).toBeTruthy();
  });
});

