import Ajv from 'ajv';

import Schema from './schema.json';
import HtmlValidator from '../../../helpers/html-validator';
import TextValidator from '../../../helpers/text-validator';

module.exports = function(attachment) {
  it('format should be correct', function() {
    const ajv = new Ajv();
    
    if (!ajv.validate(Schema, attachment)) {
      fail(ajv.errors.pop());
    }
  });

  it('should be valid html', function(done) {
    HtmlValidator.syntax(attachment.data)
      .then(() => done())
      .catch(done);
  });

  it('should not cointain forbiden charasters', () => {
    return TextValidator.chars(attachment.data);
  });

  it('tags should not contain attributes', function(done) {
    HtmlValidator.attributes(attachment.data)
      .then(() => done())
      .catch(done);
  });

  it('should contain only allowed tags', function(done) {
    HtmlValidator.tags(attachment.data)
      .then(() => done())
      .catch(done);
  });

  it.skip('should not contain empty tags', () => {});
};
