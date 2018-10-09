import React from 'react';

import PropTypes from 'prop-types';

import RealHTML from 'react-native-render-html';
import { CardItem } from 'native-base';

class HTML extends React.Component {
  render() {
    return (
      <CardItem>
        <RealHTML html={this.props.attachment.data} />
      </CardItem>
    );
  }
}

HTML.propTypes = {
  attachment: PropTypes.shape({
    type: PropTypes.oneOf(['html']),
    data: PropTypes.string.isRequired
  }).isRequired
}

export default HTML;
