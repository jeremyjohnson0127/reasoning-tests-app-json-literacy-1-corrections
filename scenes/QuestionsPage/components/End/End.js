import React from 'react';

import PropTypes from 'prop-types';

import { Card, CardItem, Content, Text, Button, Body } from 'native-base';

import { Actions } from 'react-native-router-flux';

class End extends React.Component {
  handleFinish() {
    Actions.reset('resultsPage', { 
      test: this.props.test,
      testId: this.props.testId 
    });
  }

  render() {
    return (
      <Content padder>
        <Card>
          <CardItem>
            <Body>
              <Text>
                That’s the end of the test. You may go back to any question you’re not sure about. Once you’re happy you are done, click finish to see your results.
              </Text>
            </Body>
          </CardItem>

          <Button full primary onPress={ this.handleFinish.bind(this) }>
            <Text>Finish</Text>
          </Button>
        </Card>
      </Content>
    );
  }
}

End.propTypes = {
  test: PropTypes.object.isRequired,
  testId: PropTypes.number.isRequired,
}

export default End;
