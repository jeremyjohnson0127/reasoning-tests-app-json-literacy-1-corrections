import React from 'react';

import PropTypes from 'prop-types';

import { Dimensions, Image, View } from 'react-native';

class ImageX extends React.Component {
  constructor(props) {
    super(props);

    const attachment = this.props.attachment;

    this.state = {
      uri: attachment.data,
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
      
      // Init handler here to save a pointer.
      // Needed to cancel it with .removeEventListener().
      handleOrientationChange: this.handleOrientationChange.bind(this)
    };
  }

  componentDidMount() {
    this.handleOrientationChange({
      window: Dimensions.get('window'),
      screen: Dimensions.get('screen')
    });
  }

  componentWillMount() {
    Dimensions.addEventListener('change', this.state.handleOrientationChange);
  }

  componentWillUnmount() {
    Dimensions.removeEventListener('change', this.state.handleOrientationChange);
  }

  async handleOrientationChange(orientation) {
    const updateImageSize = this.updateImageSize.bind(this);
    const matchImageSize = this.matchImageSize.bind(this);

    const uri = this.state.uri;
    const screenWidth = orientation.window.width;

    const dimensions = await this.getImageSize(uri);
    const newDimensions = matchImageSize(screenWidth, dimensions);

    updateImageSize(newDimensions);
  }

  updateImageSize(dimensions) {
    this.setState(dimensions);
  }

  getImageSize(uri) {
    return new Promise(function(resolve, reject) {
      Image.getSize(uri, function(width, height) {
        (width && height) 
          ? resolve({ width, height })
          : reject(new Error('Cannot get screen size.'));
      }, reject);
    });
  }

  matchImageSize(screenWidth, dimensions) {
    const width = (screenWidth > dimensions.width) 
      ? dimensions.width : screenWidth;

    const height = Math.round(dimensions.height / ( dimensions.width / width ));

    return { width, height };
  }

  render() {
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Image
          style={{
            width: this.state.width, 
            height: this.state.height, 
            resizeMode: Image.resizeMode.contain, 
          }}

          source={{ uri: this.state.uri }}
        />
      </View>
    );
  }
}

ImageX.propTypes = {
  attachment: PropTypes.shape({
    type: PropTypes.oneOf(['image']),
    data: PropTypes.string.isRequired
  }).isRequired
}

export default ImageX;
