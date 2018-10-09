import Question from './Question.js'

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

function mapStateToProps(state, props) {
  return {
    finish: state.finish
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Question);
