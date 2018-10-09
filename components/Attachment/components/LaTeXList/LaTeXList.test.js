import React from 'react';
import LaTeXList from './LaTeXList';

import renderer from 'react-test-renderer';

const defaultProps = {
  attachment: {
    type: 'latexList',
    data: [ "hello", "world" ]
  }
};

describe('LaTeXList', () => {
  it('renders without crashing', () => {
    const rendered = renderer.create(
      <LaTeXList {...defaultProps} />
    ).toJSON();

    expect(rendered).toBeTruthy();
  });
});
