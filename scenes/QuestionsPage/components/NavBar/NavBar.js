import React from 'react';

import PropTypes from 'prop-types';

import { Alert } from 'react-native';

import { Header, Body, Left, Right, Button, Icon, Title, Subtitle } from 'native-base';

import Timer from './components/Timer';

import { Actions } from 'react-native-router-flux';

class NavBar extends React.Component {
  handleBack() {
    Alert.alert(
      'Quit the test',
      'Are you sure you want to cancel your test and go back?',
      [
        { 
          text: 'Yes, go back', 
          onPress: () => Actions.reset('mainPage')
        },
        { text: 'No', style: 'cancel'},
      ]
    );
  }

  render() {
    const test = this.props.test;
    const testId = this.props.testId;

    return (
      <Header hasTabs>
        <Left>
          <Button transparent onPress={this.handleBack}>
            <Icon name='close' />
          </Button>
        </Left>

        <Body>
          {
            test.name
              ? <Subtitle>{ test.name }</Subtitle>
              : <Title>Test { testId + 1 }</Title>
          }
        </Body>

        <Right>
          {
            test.time_limit
              ? <Timer test={ test } testId={ testId } />
              : null
          }
        </Right>
      </Header>
    );
  }
}

NavBar.propTypes = {
  test: PropTypes.object.isRequired,
  testId: PropTypes.number.isRequired,
}

export default NavBar;
