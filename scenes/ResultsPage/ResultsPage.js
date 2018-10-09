import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { Container, Tab, Tabs, ScrollableTab, TabHeading, Icon, Text } from 'native-base';

import { Actions } from 'react-native-router-flux';

import Question from './components/Question';

class ResultsPage extends Component {
  handleChangeTab(i) {
    this.props.setTab(i);
  }

  isCorrect(question, answer) {
    //@TODO: Test me.
    return (answer !== undefined)
      && question !== undefined
      && question.answers[answer] 
      && question.answers[answer].correct;
  }

  renderTabs() {
    const testId = this.props.testId;
    const test = this.props.test;
    const answers = this.props.answers;

    const heading = (id) => (<TabHeading>
      {
        this.isCorrect(test.questions[id], answers[id])
          ? <Icon type="Ionicons" name="md-checkmark" color="green" />
          : <Icon type="Ionicons" name="md-close" color="red" />
      }

      <Text>{ String(parseInt(id) + 1) }</Text>
    </TabHeading>);

    return Object.keys(test.questions).map(id => {
      return (
        <Tab 
          key={ parseInt(id) } 
          heading={ heading(id) }
        >
          <Question testId={ parseInt(testId) } test={ test } questionId={ parseInt(id) } />
        </Tab>
      );
    });
  }

  render() {
    const test = this.props.test;
    const activeTab = this.props.activeTab;
    const handleChangeTab = this.handleChangeTab.bind(this);

    return (
      <Container>
        <Tabs 
          renderTabBar={ () => <ScrollableTab /> } 
          initialPage={ 0 }
          page={ activeTab }
          onChangeTab={ ({i}) => handleChangeTab(i) }
        >
          { this.renderTabs() }
        </Tabs>
      </Container>
    );
  }
}

ResultsPage.propTypes = {
  testId: PropTypes.number.isRequired,
  test: PropTypes.object.isRequired,
  answers: PropTypes.object.isRequired,

  activeTab: PropTypes.number.isRequired,
  setTab: PropTypes.func.isRequired,
}

export default ResultsPage;
