import React from 'react';
import Answers from './Answers';

import renderer from 'react-test-renderer';

const defaultProps = {
  answerId: 0,
  answers: []
};

describe('Answers', () => {
  it('renders without crashing', () => {
    const rendered = renderer.create(<Answers {...defaultProps} />).toJSON();

    expect(rendered).toBeTruthy();
  });
});

