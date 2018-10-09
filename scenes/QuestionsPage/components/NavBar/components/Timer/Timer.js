import React from 'react';

import PropTypes from 'prop-types';

import { Title } from 'native-base';

import { Alert } from "react-native"

import { Actions } from 'react-native-router-flux';

import Moment from "moment";
import MomentDurationFormatSetup from "moment-duration-format";

MomentDurationFormatSetup(Moment);

class Timer extends React.Component {
  constructor(props) {
    super(props);

    const time_limit = props.test.time_limit;

    this.state = {
      endTime: Date.now() + (time_limit * 1000),
      counter: time_limit,
      interval: setInterval(this.tick.bind(this), 1000) 
    };
  }

  componentWillUnmount() {
    // Stop timer.
    clearTimeout(this.state.interval);
  }

  timesUp() {
    clearTimeout(this.state.interval);

    Alert.alert(
      'Time\'s up!',
      null,
      [
        { text: 'Keep practising' },
        {
          text: "End test", 
          onPress: this.goToResultsPage.bind(this)
        },
      ],

      { cancelable: false }
    );
  }

  goToResultsPage() {
    Actions.reset('resultsPage', {
      test: this.props.test,
      testId: this.props.testId 
    });
  }

  tick() {
    const nowTime = Date.now();
    const endTime = this.state.endTime;

    const time = endTime - nowTime;

    const counter = (time > 0)
      ? Math.round(time / 1000) : 0;

    this.setState({
      counter: counter
    });

    if (nowTime > this.state.endTime) {
      this.timesUp.call(this);
    }
  }

  format(seconds) {
    return Moment.duration(parseInt(seconds), 'seconds').format("hh:mm:ss");
  }

  render() {
    const seconds = this.state.counter;

    return (
      <Title>
        { seconds ? this.format(seconds) : '' }
      </Title>
    );
  }
}

Timer.propTypes = {
  test: PropTypes.object.isRequired,
  testId: PropTypes.number.isRequired
}

export default Timer;
