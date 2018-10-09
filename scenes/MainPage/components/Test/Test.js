import React from 'react';

import PropTypes from 'prop-types';

import { ListItem, Right, Body, Text, Icon } from 'native-base';

import { Actions } from 'react-native-router-flux';

class Test extends React.Component {
  async handlePress() {
    const props = {
      test: this.props.test,
      testId: this.props.testId,
      intro: this.props.intro
    };

    Actions.reset('introQuestionsPage', props);
  }

  render() {
    const test = this.props.test;
    const testId = this.props.testId;

    return (
      <ListItem onPress={ this.handlePress.bind(this) }>
        <Body>
          <Text>{ test.name || `Test ${testId +1}` }</Text>
          <Text note>Questions: { test.questions.length }</Text>

          {
            test.pass_percentage 
              ? <Text note>Pass Percentage: { test.pass_percentage }%</Text>
              : null
          }

          {
            test.time_limit 
              ? <Text note>Time Limit: { test.time_limit/60 } min</Text>
              : null
          }
        </Body>

        <Right>
          <Icon name="arrow-forward" />
        </Right>
      </ListItem>
    );
  }
}

Test.propTypes = {
  test: PropTypes.object.isRequired,
  testId: PropTypes.number.isRequired,
}

export default Test;
