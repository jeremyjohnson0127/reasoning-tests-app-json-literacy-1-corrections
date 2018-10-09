import React from 'react';

import PropTypes from 'prop-types';

import { CardItem } from 'native-base';

// @TODO: Requires this change to be merged
// @see: https://github.com/calvinkei/react-native-mathjax/pull/13
import MathJax from 'react-native-mathjax';

class LaTeX extends React.Component {
  render() {
    return (
      <CardItem>
        <MathJax
          html={this.props.attachment.data}
          customStyle={`* { font-family: Sans-Serif; }`}
        />
      </CardItem>
    );
  }
}

LaTeX.propTypes = {
  attachment: PropTypes.shape({
    type: PropTypes.oneOf(['latex']),
    data: PropTypes.string.isRequired
  }).isRequired
}

export default LaTeX;
