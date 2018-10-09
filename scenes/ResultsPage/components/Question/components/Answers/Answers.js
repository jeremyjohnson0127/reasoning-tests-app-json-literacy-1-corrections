import React from 'react';

import PropTypes from 'prop-types';

import { Right, Container, List, ListItem, CheckBox, Body, Text, Icon } from 'native-base';

class Answers extends React.Component {
  render() {
    const answers = this.props.answers;
    const answerId = this.props.answerId;

    const listItems = answers.map((answer, id) =>
      <ListItem key={ id }>
        <CheckBox checked={ id === answerId } disabled={true} />

        <Body>
          <Text>{ answer.value }</Text>
        </Body>

        <Right>
          {
            answer.correct 
              ? <Icon type="Ionicons" name="md-checkmark" color="green" />
              : <Icon type="Ionicons" name="md-close" color="red" />
          }
        </Right>
      </ListItem>
    );

    return (
      <List>
        { listItems }
      </List>
    );
  }
}

Answers.propTypes = {
  answers: PropTypes.array.isRequired,
  answerId: PropTypes.number,
}

export default Answers;
