import React from 'react';

import PropTypes from 'prop-types';

import { Card, List, Content } from 'native-base';

import Test from './components/Test';

class MainPage extends React.Component {
  render() {
    return (
      <Content>
        <Card>
          <List>
            { this.props.tests.map((test, id) => 
              <Test test={ test } key={ id } testId={ id } intro={ this.props.intro } />
            ) }
          </List>
        </Card>
      </Content>
    );
  }
}

MainPage.propTypes = {
  tests: PropTypes.array.isRequired,
  intro: PropTypes.array.isRequired
}

export default MainPage;
