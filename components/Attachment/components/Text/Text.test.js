import React from 'react';
import Text from './Text';

import renderer from 'react-test-renderer';

const defaultProps = {
  attachment: {
    type: 'text',
    data: "hello world"
  }
};

describe('Attachment', () => {
  it('renders without crashing', () => {
    const rendered = renderer.create(
      <Text {...defaultProps} />
    ).toJSON();

    expect(rendered).toBeTruthy();
  });
});
