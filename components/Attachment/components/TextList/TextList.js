import React from 'react';

import PropTypes from 'prop-types';

import { CardItem, Text } from 'native-base';

class TextList extends React.Component {
  render() {
    return this.props.attachment.data.map(function(data, id) {
      return (
        <CardItem key={ id }>
          <Text>{ data }</Text>
        </CardItem>
      );
    });
  }
}

TextList.propTypes = {
  attachment: PropTypes.shape({
    type: PropTypes.oneOf(['textList']),
    data: PropTypes.arrayOf(PropTypes.string),
  }).isRequired
}

export default TextList;
