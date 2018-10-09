import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { Linking, Alert } from 'react-native';

import { Constants } from 'expo';
import { Content, Button, Text } from 'native-base';
import HTML from 'react-native-render-html';

import Attachment from '../../../../components/Attachment';

import Answers from './components/Answers';

class Question extends Component {
  handleFeedback() {
    const test = this.props.test;
    const testType = Constants.manifest.name;
    const testId = parseInt(this.props.testId) + 1;
    const questionId = parseInt(this.props.questionId) + 1;

    const email = `hello+apps@wikijob.co.uk`;
    const subject = `Feedback on ${testType} app`;
    const body = `I have some feedback on test ${testId}, question ${questionId}.\n\nThe feedback is ...`;
    const link = `mailto:${email}?subject=${subject}&body=${body}`;

    Linking.openURL(link).catch(() => {
      Alert.alert('Cannot open email client');
    });
  }

  render() {
    const test = this.props.test;
    const questionId = this.props.questionId;
    const question = test.questions[questionId];
    const handleFeedback = this.handleFeedback.bind(this);

    const questionList = question.question.map(function(attachment, id) {
      return (
        <Attachment attachment={ attachment } test={ test } key={ id } />
      );
    });

    const explanationList = question.explanation.map(function(attachment, id) {
      return (
        <Attachment attachment={ attachment } test={ test } key={ id } />
      );
    });

    return (
      <Content>
        { questionList }

        <Answers
          questionId={ parseInt(questionId) } 
          answers={ question.answers }
        />

        { explanationList }

        <Button full primary onPress={ handleFeedback }>
          <Text>Got feedback? Let us know</Text>
        </Button>
      </Content>
    );
  }
};

Question.propTypes = {
  testId: PropTypes.number.isRequired,
  questionId: PropTypes.number.isRequired,
  test: PropTypes.object.isRequired,
}

export default Question;
