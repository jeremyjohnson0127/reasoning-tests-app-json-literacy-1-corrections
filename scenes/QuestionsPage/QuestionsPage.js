import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { Container, Tab, Tabs, ScrollableTab, TabHeading, Icon, Text } from 'native-base';

import { Actions } from 'react-native-router-flux';

import Question from './components/Question';

import End from './components/End';

class QuestionsPage extends Component {
  componentDidMount() {
    this.props.initAnswers();
  }

  handleChangeTab(i) {
    this.props.setTab(i);
  }

  renderTabs() {
    const test = this.props.test;
    const ids = Object.keys(test.questions);

    return ids.map(id => {
      return (
        <Tab 
          key={ id } 
          heading={ String(parseInt(id) + 1) }
        >
          <Question test={ test } questionId={ parseInt(id) } />
        </Tab>
      );
    });
  }

  render() {
    const testId = this.props.testId;
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

          <Tab heading={ <TabHeading><Icon type="Ionicons" name="md-done-all" /></TabHeading> }>
            <End test={ test } testId={ testId } />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

QuestionsPage.propTypes = {
  test: PropTypes.object.isRequired,
  testId: PropTypes.number.isRequired,
  activeTab: PropTypes.number.isRequired,
  setTab: PropTypes.func.isRequired,
  initAnswers: PropTypes.func.isRequired 
}

export default QuestionsPage;
