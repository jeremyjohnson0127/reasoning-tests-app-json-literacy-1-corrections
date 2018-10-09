import QuestionsPage from './QuestionsPage.js'

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

import {
  initAnswers,
  setTab
} from '../../actions';

function mapStateToProps(state, props) {
  return {
    activeTab: state.tab,
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    initAnswers, 
    setTab,
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(QuestionsPage);
