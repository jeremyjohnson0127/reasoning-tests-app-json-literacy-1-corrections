import React from 'react';

import PropTypes from 'prop-types';

import { ListItem, Text } from 'native-base';

class Caption extends React.Component {
  render() {
    return (
      <ListItem itemDivider>
        <Text>{ this.props.attachment.data }</Text>
      </ListItem>
    );
  }
}

Caption.propTypes = {
  attachment: PropTypes.shape({
    type: PropTypes.oneOf(['caption']),
    data: PropTypes.string.isRequired
  }).isRequired
}

export default Caption;
