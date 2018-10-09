import Ajv from 'ajv';

import Schema from './schema.json';

module.exports = function(attachment) {
  it('format should be correct', function() {
    const ajv = new Ajv();
    
    if (!ajv.validate(Schema, attachment)) {
      fail(ajv.errors.pop());
    }
  });

  it('% characters within a formula should be escaped with \\\\%', (done) => {
    (attachment.data.search(/\$.*((?<!\\)(?:\\\\)*%).*\$/g) === -1)
      ? done() : done(new Error(attachment.data)); 
  });

  it('&dollar; characters within a formula should be escaped with \\\\&dollar;', (done) => {
    (attachment.data.search(/\$.*((?<!\\)(?:\\\\)*\&dollar;).*\$/g) === -1)
      ? done() : done(new Error(attachment.data)); 
  });

  it('£ characters should be replaced with &pound;', (done) => {
    (attachment.data.indexOf("£") === -1)
      ? done() : done(new Error(attachment.data)); 
  });

  it('€ characters should be replaced with &euro;', (done) => {

    (attachment.data.indexOf("€") === -1)
      ? done() : done(new Error(attachment.data)); 
  });

  it("$\\\\$ should be removed", (done) => {
    (attachment.data.indexOf("$\\\\$") === -1)
      ? done() : done(new Error(attachment.data)); 
  });

  it("$\\$\\$ should be replaced with $", (done) => {
    (attachment.data.indexOf("$\\$\\$") === -1)
      ? done() : done(new Error(attachment.data)); 
  });

  it("$\\%\\$ should be replaced with %", (done) => {
    (attachment.data.indexOf("$\\%\\$") === -1)
      ? done() : done(new Error(attachment.data)); 
  });

  it('text with <br> should be splited up by creating a new item in the array.', (done) => {
    (attachment.data.search(/(<br>|<br\/>|<br \/>)/gi) === -1)
      ? done() : done(new Error(attachment.data)); 
  });
};
