import Answers from './Answers.js'

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

function mapStateToProps(state, props) {
  const answerId = state.answers[props.questionId];

  return {
    answerId
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Answers);
