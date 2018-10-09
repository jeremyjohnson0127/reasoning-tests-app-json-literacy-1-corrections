import Ajv from 'ajv';

import Schema from './schema.json';
import AnswerSpec from '../answer'
import AttachmentSpec from '../attachment'

module.exports = function(test, questionId) {
  let question;

  beforeEach(function() {
    question = test.questions[questionId];
  });

  it('format should be correct', function() {
    const ajv = new Ajv();
    
    if (!ajv.validate(Schema, question)) {
      fail(ajv.errors.pop())
    }
  });

  describe('question', function() {
    for (id in test.questions[questionId].question) {
      describe(id, function() {
        const attachment = test.questions[questionId].question[id];

        AttachmentSpec(attachment, test);
      });
    }
  });

  describe('explanation', function() {
    for (id in test.questions[questionId].explanation) {
      describe(id, function() {
        const attachment = test.questions[questionId].explanation[id];

        AttachmentSpec(attachment, test);
      });
    }
  });

  describe('answers', function() {
    for (answerId in test.questions[questionId].answers) {
      describe(parseInt(answerId) + 1, function() {
        AnswerSpec(test, questionId, answerId);
      });
    }
  });
};
