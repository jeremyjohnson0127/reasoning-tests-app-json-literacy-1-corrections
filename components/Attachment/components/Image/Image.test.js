import React from 'react';
import Image from './Image';

import renderer from 'react-test-renderer';

const attachmentMock = {
  type: 'image',
  data: "data:image/gif;base64,R0lGODlhEAAQAKIAAAAAAP/O5/97rf/n9////////wAAAAAAACH5BAEHAAUALAAAAAAQABAAAANJWCLVvu6FRcWMzYZN9o3LBgwdMDFgMAzq+j3WOgjsiSmb/N7xht44grDzoyhYQwILZQnVhLmTjzap9jQMrNVjzGyxQGPlByw7EgA7" 
};

const defaultProps = {
  attachment: attachmentMock 
};

const Component = new Image(defaultProps);

describe('Image', () => {
  it('renders without crashing', () => {
    const rendered = renderer.create(
      <Image {...defaultProps} />
    ).toJSON();

    expect(rendered).toBeTruthy();
  });

  describe('getImageSize', function() {
    //@TODO: https://github.com/facebook/react-native/issues/14097
    it.skip('should return correct an image dimmentions', function(done) {
      const uri = attachmentMock.data;

      Component.getImageSize(uri).then(function(dimensions) {
        expect(dimensions.height).toBe(16);
        expect(dimensions.width).toBe(16);
      }).catch(done);
    });

    //@TODO: BLOB of images is too big to be read-friendly.
    it.skip('should return correct gif image dimmentions', () => {});
    it.skip('should return correct png image dimmentions', () => {});
    it.skip('should return correct jpg image dimmentions', () => {});
  });


  describe('matchImageSize()', function() {
    it('should resize if the screen is smaller than an image', function() {
      const dimensions = Component.matchImageSize(10, {
        height: 20,
        width: 20
      });

      expect(dimensions.height).toBe(10);
      expect(dimensions.width).toBe(10);
    });

    it('should not resize if the screen is bigger than an image', function() {
      const dimensions = Component.matchImageSize(30, {
        height: 20,
        width: 20
      });

      expect(dimensions.height).toBe(20);
      expect(dimensions.width).toBe(20);
    });

    it('should not resize if the screen is the same as an image', function() {
      const dimensions = Component.matchImageSize(20, {
        height: 20,
        width: 20
      });

      expect(dimensions.height).toBe(20);
      expect(dimensions.width).toBe(20);
    });
  });
});
