import React from 'react';

import { AsyncStorage } from "react-native";

import { Router, Scene } from 'react-native-router-flux';
import { Spinner } from 'native-base';

import { Font, Constants } from "expo";

import { Provider } from 'react-redux'
import { createStore } from 'redux'

import rootReducer from './reducers'

const store = createStore(rootReducer);

import IntroPage from './scenes/IntroPage';
import IntroQuestionsPage from './scenes/IntroQuestionsPage';

import MainPage from './scenes/MainPage';
import MainNavBar from './scenes/MainPage/components/NavBar';

import QuestionsPage from './scenes/QuestionsPage';
import QuestionsNavBar from './scenes/QuestionsPage/components/NavBar';

import ResultsPage from './scenes/ResultsPage';
import ResultsPageNavBar from './scenes/ResultsPage/components/NavBar';

import testService from './services/testService';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      intro: true
    };
  }

  async componentWillMount() {
    // Load fonts for android.
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });

    this.setState({ 
      loading: false,
      intro: !await AsyncStorage.getItem('intro')
    });
  }

  render() {
    if (this.state.loading) {
      return <Spinner />;
    }

    const testData = testService.all();

    return (
      <Provider store={store}>
        <Router>
          <Scene key="root">
            <Scene key="introPage" 
              component={IntroPage} 
              gesturesEnabled={false} 
              hideNavBar={true}
              initial={this.state.intro}
            />

            <Scene 
              key="mainPage" 
              tabs={ true } 
              tabBarPosition="top" 
              gesturesEnabled={ false } 
              navBar={ MainNavBar } 
              hideTabBar={ testData.length <= 1 }
              initial={ !this.state.intro }>

              { testData.map(data => 
                <Scene 
                  key={ data.key } 
                  title={ data.title } 
                  component={ MainPage } 
                  tests={ data.tests } 
                  intro={ data.intro } 
                  hideNavBar={ true } 
                />
              ) }
            </Scene>

            <Scene key="introQuestionsPage" 
              component={IntroQuestionsPage} 
              gesturesEnabled={false} 
              hideNavBar={true}
            />

            <Scene key="questionsPage" 
              component={QuestionsPage} 
              gesturesEnabled={false} 
              navBar={QuestionsNavBar} 
            />

            <Scene key="resultsPage" 
              component={ResultsPage} 
              gesturesEnabled={false} 
              navBar={ResultsPageNavBar} 
            />
          </Scene>
        </Router>
      </Provider>
    );
  }
}
