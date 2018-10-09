import React from 'react';

import PropTypes from 'prop-types';

import { Header, Body, Left, Right, Button, Icon, Title, Subtitle } from 'native-base';

import { Constants, StoreReview } from 'expo';
import { Linking, AsyncStorage, Alert } from "react-native";

import { Actions } from 'react-native-router-flux';

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    const test = this.props.test;

    this.state = {
      score: 0,
      percentage: 0,
      total: test.questions.length,
      pass_percentage: test.pass_percentage,
    };
  }

  componentDidMount() {
    const test = this.props.test;
    const questions = test.questions;
    const answers = this.props.answers;

    this.setState({
      score: this.getScore(questions, answers),
      percentage: this.getPercentage(questions, answers)
    });
  }

  getPercentage(questions, answers) {
    //@TODO: Test it.
    const score = this.getScore(questions, answers);

    return Math.floor((score / Object.values(questions).length) * 100);
  }

  getScore(questions, answers) {
    //@TODO: Test it.
    return questions.reduce(function(result, question, id) {
      const answer = answers[id];

      if (answer !== undefined
        && question.answers[answer] 
        && question.answers[answer].correct) {
        result++;
      }

      return result;
    }, 0);
  }

  handleReview() {
    StoreReview.requestReview();

    return this.setFlag();
  }

  handleFeedback() {
    const testType = Constants.manifest.name;

    const email = `hello+apps@wikijob.co.uk`;
    const subject = `Feedback for ${testType} app`;
    const body = `Hi there\n\nHere's what I don't like about the app:\n\n`;
    const link = `mailto:${email}?subject=${subject}&body=${body}`;

    return Promise.all([
      Linking.openURL(link),
      this.setFlag()
    ]);
  }

  setFlag() {
    return AsyncStorage.setItem('review', 'true');
  }

  async handleClose() {
    Actions.reset('mainPage');

    // Device is not supported.
    if (!StoreReview.isSupported()) {
      return false;
    }

    // Did we already ask for a review?
    if (!await AsyncStorage.getItem('review')) {
      Alert.alert(
        'Are you enjoying using this app?',
        null,
        [
          {
            text: 'Yes ❤️', 
            onPress: this.handleReview.bind(this)
          },
          {
            text: "No 💩", 
            onPress: this.handleFeedback.bind(this)
          },
          { text: 'Ask me later' },
        ],

        { cancelable: false }
      )
    }
  }

  render() {
    const score = this.state.score;
    const total = this.state.total;
    const percentage = this.state.percentage; 
    const pass_percentage = this.state.pass_percentage; 
    const handleClose = this.handleClose.bind(this);

    return (
      <Header hasTabs>
        <Left>
          <Button transparent onPress={ handleClose }>
            <Icon name='close' />
          </Button>
        </Left>

        <Body>
          <Subtitle>Score: { score }/{ total } - { percentage }%</Subtitle>
          <Subtitle>Pass: { pass_percentage }%</Subtitle>
        </Body>

        <Right>
          {
            percentage >= pass_percentage 
              ? <Title style={{ color: "green" }}>Pass</Title>
              : <Title style={{ color: "red" }}>Fail</Title>
          }
        </Right>

      </Header>
    );
  }
}

NavBar.propTypes = {
  test: PropTypes.object.isRequired,
  answers: PropTypes.object.isRequired,
}

export default NavBar;
