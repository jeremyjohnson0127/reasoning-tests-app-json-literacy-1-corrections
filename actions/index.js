export const setTab = function(tab) {
  return {
    type: 'tab:set',
    payload: tab 
  };
};

export const initAnswers = function() {
  return { type: 'answers:init' };
};

export const addAnswer = function(questionId, answerId) {
  return {
    type: 'answers:add',
    payload: {
      question_id: questionId,
      answer_id: answerId
    } 
  };
};
