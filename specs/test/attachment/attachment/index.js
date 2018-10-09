import Ajv from 'ajv';

import Schema from './schema.json';

module.exports = function(attachment, test) {
  it('format should be correct', function() {
    const ajv = new Ajv();
    
    if (!ajv.validate(Schema, attachment)) {
      fail(ajv.errors.pop());
    }
  });

  it('attachment should exist', function() {
    const attachments = test.attachments;
    const field = attachment.data;

    expect(attachments.hasOwnProperty(field)).toBe(true);
  });
};
