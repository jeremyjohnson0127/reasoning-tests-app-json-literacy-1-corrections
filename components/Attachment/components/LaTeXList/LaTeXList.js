import React from 'react';

import PropTypes from 'prop-types';

import { CardItem, Text } from 'native-base';

import LaTeX from '../LaTeX';

class LaTeXList extends React.Component {
  render() {
    return <LaTeX attachment={{
      type: 'latex', 
      data: this.props.attachment.data.join("</br></br>") 
    }} />
  }
}

LaTeXList.propTypes = {
  attachment: PropTypes.shape({
    type: PropTypes.oneOf(['latexList']),
    data: PropTypes.arrayOf(PropTypes.string),
  }).isRequired
}

export default LaTeXList;
