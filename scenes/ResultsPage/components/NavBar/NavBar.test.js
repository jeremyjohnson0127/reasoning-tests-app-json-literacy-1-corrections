import React from 'react';
import NavBar from './NavBar';

import renderer from 'react-test-renderer';

const defaultProps = {
  answers: {},
  test: {
    name: 'foo',
    attachments: {},
    questions: [],
    pass_percentage: 10,
    time_limit: 10,
  },
};

describe('NavBar', () => {
  it('renders without crashing', () => {
    const rendered = renderer.create(<NavBar {...defaultProps} />).toJSON();

    expect(rendered).toBeTruthy();
  });
});
