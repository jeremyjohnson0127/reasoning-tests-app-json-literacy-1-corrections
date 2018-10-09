import Ajv from 'ajv';

import Schema from './schema.json';

module.exports = function(attachment, test) {
  it('format should be correct', function() {
    const ajv = new Ajv();
    
    if (!ajv.validate(Schema, attachment)) {
      fail(ajv.errors.pop());
    }
  });

  it.skip('base64 data should be valid', () => {});
};
