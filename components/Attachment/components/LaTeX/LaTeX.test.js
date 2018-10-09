import React from 'react';
import LaTeX from './LaTeX';

import renderer from 'react-test-renderer';

const defaultProps = {
  attachment: {
    type: 'latex',
    data: "$$P = \frac{C}{R} \times 100 = \frac{130}{150} \times 100 = 86.7$$"
  }
};

describe('LaTeX', () => {
  it('renders without crashing', () => {
    const rendered = renderer.create(
      <LaTeX {...defaultProps} />
    ).toJSON();

    expect(rendered).toBeTruthy();
  });
});
