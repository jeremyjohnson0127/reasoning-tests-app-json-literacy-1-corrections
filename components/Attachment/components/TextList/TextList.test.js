import React from 'react';
import TextList from './TextList';

import renderer from 'react-test-renderer';

const defaultProps = {
  attachment: {
    type: 'textList',
    data: [ "hello", "world" ]
  }
};

describe('Attachment', () => {
  it('renders without crashing', () => {
    const rendered = renderer.create(
      <TextList {...defaultProps} />
    ).toJSON();

    expect(rendered).toBeTruthy();
  });
});
