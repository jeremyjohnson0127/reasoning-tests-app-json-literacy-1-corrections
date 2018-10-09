import reducer from './answers';
import expect from 'expect';

describe('answers reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({});
  });

  it('should handle "answers:init"', () => {
    const action = { type: 'questions:init' };
    expect(reducer({}, action)).toEqual({});
  });

  it('should handle "answers:add"', () => {
    const answer = {
      question_id: 2,
      answer_id: 3 
    };

    const output = reducer({}, {
      type: 'answers:add',
      payload: answer 
    });

    expect(output[answer.question_id]).toEqual(answer.answer_id);
  });
});
