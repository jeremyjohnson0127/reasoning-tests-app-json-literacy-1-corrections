import Ajv from 'ajv';

import AttachmentText from './text';
import AttachmentTextList from './textList';

import AttachmentLatex from './latex';
import AttachmentLatexList from './latexList';

import AttachmentHtml from './html';
import AttachmentImage from './image';
import AttachmentAttachment from './attachment';

module.exports = function(attachment, test) {
  describe(attachment.type, function() {
    switch (attachment.type) {
      case 'attachment':
        AttachmentAttachment(attachment, test);
        break;

      case 'html':
        AttachmentHtml(attachment);
        break;

      case 'caption':
      case 'text':
        AttachmentText(attachment);
        break;

      case 'textList':
        AttachmentTextList(attachment);
        break;
        
      case 'image':
        AttachmentImage(attachment);
        break;

      case 'latex':
        AttachmentLatex(attachment);
        break;

      case 'latexList':
        AttachmentLatexList(attachment);
        break;

      default:
        it('attachment.type should be defined', fail);
    }
  });
};
