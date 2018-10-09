import React from 'react';

import PropTypes from 'prop-types';

import { Container, List, ListItem, CheckBox, Body, Text } from 'native-base';

class Answers extends React.Component {
  handleSelect(questionId, answerId) {
    this.props.addAnswer(questionId, answerId);
    this.props.setTab(parseInt(questionId) + 1);
  }

  render() {
    const answers = this.props.answers;
    const answerId = this.props.answerId;

    const listItems = answers.map((answer, id) =>
      <ListItem key={ id } onPress={ () => this.handleSelect(this.props.questionId, id) }>
        <CheckBox
          checked={ id === answerId }
          onPress={ () => this.handleSelect(this.props.questionId, id) }
        />

        <Body>
          <Text>{ answer.value }</Text>
        </Body>
      </ListItem>
    );

    return (
      <List>
        {listItems}
      </List>
    );
  }
}

Answers.propTypes = {
  answers: PropTypes.array.isRequired,
  questionId: PropTypes.number.isRequired,

  answerId: PropTypes.number,

  addAnswer: PropTypes.func.isRequired,
  setTab: PropTypes.func.isRequired,
}

export default Answers;
