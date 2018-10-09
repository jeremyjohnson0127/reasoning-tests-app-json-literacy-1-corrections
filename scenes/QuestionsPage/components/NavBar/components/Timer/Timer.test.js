import React from 'react';
import Timer from './Timer';

import renderer from 'react-test-renderer';

const defaultProps = {
  testId: 1,
  test: {
    name: 'foo',
    attachments: {},
    questions: [],
    pass_percentage: 10,
    time_limit: 10,
  },
};

describe('Timer', () => {
  it('renders without crashing', () => {
    const rendered = renderer.create(<Timer {...defaultProps} />).toJSON();

    expect(rendered).toBeTruthy();
  });
});

