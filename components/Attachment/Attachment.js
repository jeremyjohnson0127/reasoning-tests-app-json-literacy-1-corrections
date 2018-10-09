import React from 'react';

import PropTypes from 'prop-types';

import Caption from './components/Caption';

import Text from './components/Text';
import TextList from './components/TextList';

import HTML from './components/HTML';
import Image from './components/Image';

import LaTeX from './components/LaTeX';
import LaTeXList from './components/LaTeXList';

class Attachment extends React.Component {
  render() {
    const test = this.props.test;
    const attachment = this.props.attachment;

    switch (attachment.type) {
      case 'attachment':
        const newAttachment = test.attachments[attachment.data];

        return (<Attachment attachment={ newAttachment } />);

      case 'image':
        return (<Image attachment={ attachment } />);

      case 'latex':
        return (<LaTeX attachment={ attachment } />);
        
      case 'latexList':
        return (<LaTeXList attachment={ attachment } />);

      case 'caption':
        return (<Caption attachment={ attachment } />);

      case 'text':
        return (<Text attachment={ attachment } />);

      case 'textList':
        return (<TextList attachment={ attachment } />);

      // case 'html':
      default:
        return (<HTML attachment={ attachment } />);
    }
  }
}

Attachment.propTypes = {
  test: PropTypes.object,
  attachment: PropTypes.shape({
    type: PropTypes.oneOf(['attachment', 'caption', 'image', 'latex', 'latexList', 'text', 'textList']),
    data: PropTypes.any.isRequired,
  }).isRequired
}

export default Attachment;
