import ResultsPage from './ResultsPage.js'

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

import {
  setTab
} from '../../actions';

function mapStateToProps(state, props) {
  return {
    activeTab: state.tab,
    answers: state.answers
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    setTab,
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(ResultsPage);
