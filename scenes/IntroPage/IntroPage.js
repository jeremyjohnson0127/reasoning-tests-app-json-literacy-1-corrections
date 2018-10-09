import React from 'react';

import { AsyncStorage } from "react-native";
import AppIntroSlider from 'react-native-app-intro-slider';
import { Constants } from 'expo';
import { Actions } from 'react-native-router-flux';

class IntroPage extends React.Component {
  onDone() {
    AsyncStorage.setItem('intro', 'true');
    Actions.reset('mainPage');
  }

  render() {
    return (
      <AppIntroSlider 
        slides={Constants.manifest.extra.intro} 
        onDone={this.onDone} 
      />
    );
  }
}

export default IntroPage;
