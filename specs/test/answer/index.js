import Ajv from 'ajv';

import Schema from './schema.json';

module.exports = function(test, questionId, answerId) {
  let question, answer;

  beforeEach(function() {
    question = test.questions[questionId];
    answer = question.answers[answerId];
  });

  it('format should be correct', function() {
    const ajv = new Ajv();
    
    if (!ajv.validate(Schema, answer)) {
      fail(ajv.errors.pop());
    }
  });

  it('answers should have only one correct answer', function() {
    //@TODO: Schould be executed only once per question.
    const count = question.answers.reduce(function(count, answer) {
      return answer.correct ? count + 1 : count;
    }, 0);

    expect(count).toBe(1);
  });

  it('value should be plain text', function() {
    const hasHtml = /<[a-z][\s\S]*>/i.test(answer.value);

    if (hasHtml) fail(answer.value);
  });
};
