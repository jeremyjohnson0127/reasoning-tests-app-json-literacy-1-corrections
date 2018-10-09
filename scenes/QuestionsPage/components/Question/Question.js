import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { Content } from 'native-base';
import HTML from 'react-native-render-html';

import Attachment from '../../../../components/Attachment';

import Answers from './components/Answers';

class Question extends Component {
  render() {
    const test = this.props.test;
    const questionId = this.props.questionId;
    const question = test.questions[questionId];

    const questionList = question.question.map(function(attachment, id) {
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
      </Content>
    );
  }
};

Question.propTypes = {
  test: PropTypes.object.isRequired,
  questionId: PropTypes.number.isRequired,
}

export default Question;
