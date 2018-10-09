import Ajv from 'ajv';

import Schema from './schema.json';
import AttachmentText from '../text';

module.exports = function(attachment) {
  it('format should be correct', function() {
    const ajv = new Ajv();

    if (!ajv.validate(Schema, attachment)) {
      fail(ajv.errors.pop());
    }
  });

  for (id in attachment.data) {
    describe(id, function() {
      AttachmentText({
        type: 'text',
        data: attachment.data[id]
      });
    });
  }
};
