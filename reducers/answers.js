const answers = {};

export default function(state = answers, { type, payload }) {
  switch (type) {
    case 'answers:init':
      return {};

    case 'answers:add':
      const output = Object.assign({}, state);

      output[payload.question_id] = payload.answer_id;

      return output;

    default:
      return state;
  }
};
