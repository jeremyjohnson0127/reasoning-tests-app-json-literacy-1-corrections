import React from 'react';
import Caption from './Caption';

import renderer from 'react-test-renderer';

const defaultProps = {
  attachment: {
    type: 'caption',
    data: "hello world"
  }
};

describe('Attachment', () => {
  it('renders without crashing', () => {
    const rendered = renderer.create(
      <Caption {...defaultProps} />
    ).toJSON();

    expect(rendered).toBeTruthy();
  });
});
