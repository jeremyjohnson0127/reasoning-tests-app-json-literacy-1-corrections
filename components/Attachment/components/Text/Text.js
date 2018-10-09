import React from 'react';

import PropTypes from 'prop-types';

import { CardItem, Text } from 'native-base';

class TextX extends React.Component {
  render() {
    return (
      <CardItem>
        <Text>{ this.props.attachment.data }</Text>
      </CardItem>
    );
  }
}

TextX.propTypes = {
  attachment: PropTypes.shape({
    type: PropTypes.oneOf(['text']),
    data: PropTypes.string.isRequired
  }).isRequired
}

export default TextX;
