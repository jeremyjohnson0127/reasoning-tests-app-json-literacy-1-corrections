import React from 'react';
import Attachment from './Attachment';

import renderer from 'react-test-renderer';

const attachmentMock = {
  type: "text",
  data: "hello world"
};

const testMock = {
  attachments: {
    foo: attachmentMock
  },
};

const defaultProps = {
  test: testMock,
  attachment: {
    type: 'attachment',
    data: 'foo'
  },
};

describe('Attachment', () => {
  it('renders without crashing', () => {
    const rendered = renderer.create(
      <Attachment {...defaultProps} />
    ).toJSON();

    expect(rendered).toBeTruthy();
  });
});
