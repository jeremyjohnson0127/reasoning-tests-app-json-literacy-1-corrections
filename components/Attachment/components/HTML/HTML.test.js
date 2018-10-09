import React from 'react';
import HTML from './HTML';

import renderer from 'react-test-renderer';

const defaultProps = {
  attachment: {
    type: 'html',
    data: "<h1>hello world</h1>"
  }
};

describe('Attachment', () => {
  it('renders without crashing', () => {
    const rendered = renderer.create(
      <HTML {...defaultProps} />
    ).toJSON();

    expect(rendered).toBeTruthy();
  });
});
