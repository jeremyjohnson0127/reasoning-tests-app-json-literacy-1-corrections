import React from 'react';

import { AsyncStorage } from "react-native";
import AppIntroSlider from 'react-native-app-intro-slider';

import PropTypes from 'prop-types';

import { Actions } from 'react-native-router-flux';

class IntroQuestionsPage extends React.Component {
  onDone() {
    Actions.reset('questionsPage', {
      test: this.props.test,
      testId: this.props.testId
    });
  }

  render() {
    return (
      <AppIntroSlider
        slides={this.props.intro} 
        onDone={this.onDone.bind(this)} 
      />
    );
  }
}

IntroQuestionsPage.propTypes = {
  test: PropTypes.object.isRequired,
  testId: PropTypes.number.isRequired,
  intro: PropTypes.array.isRequired,
}

export default IntroQuestionsPage;
