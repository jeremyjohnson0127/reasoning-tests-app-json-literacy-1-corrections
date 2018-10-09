import Ajv from 'ajv';

import Schema from './schema.json';
import TextValidator from '../../../helpers/text-validator';

module.exports = function(attachment) {
  it('format should be correct', function() {
    const ajv = new Ajv();
    
    if (!ajv.validate(Schema, attachment)) {
      fail(ajv.errors.pop());
    }
  });

  it('should not contain html tags', function() {
    expect(/<[a-z][\s\S]*>/i.test(attachment.data)).toBe(false);
  });

  it('should not cointain forbiden charasters', () => {
    return TextValidator.chars(attachment.data);
  });
};
