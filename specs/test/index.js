import Ajv from 'ajv';

import Schema from './schema.json';

import AttachmentSpec from './attachment'
import QuestionSpec from './question'

module.exports = function(test) {
  it('format should be correct', function() {
    const ajv = new Ajv();
    
    if (!ajv.validate(Schema, test)) {
      fail(ajv.errors.pop())
    }
  });

  describe('attachments', function() {
    for (attachmentId in test.attachments) {
      describe(attachmentId, function() {
        const attachment = test.attachments[attachmentId];

        AttachmentSpec(attachment, test);
      });
    }
  });

  describe('questions', function() {
    for (questionId in test.questions) {
      describe(parseInt(questionId) + 1, function() {
        QuestionSpec(test, questionId);
      });
    }
  });
};
