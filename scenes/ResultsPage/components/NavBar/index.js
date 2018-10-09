import NavBar from './NavBar.js'

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

function mapStateToProps(state) {
  return {
    answers: state.answers
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(NavBar);
