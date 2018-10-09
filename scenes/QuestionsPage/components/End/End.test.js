import React from 'react';
import End from './End';

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

describe('End', () => {
  it('renders without crashing', () => {
    const rendered = renderer.create(<End {...defaultProps} />).toJSON();

    expect(rendered).toBeTruthy();
  });
});

