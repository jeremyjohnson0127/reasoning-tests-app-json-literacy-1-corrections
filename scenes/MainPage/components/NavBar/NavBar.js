import React from 'react';

import { Header, Body, Title } from 'native-base';

import { Constants } from 'expo';

export default class NavBar extends React.Component {
  render() {
    return (
      <Header>
        <Body>
          <Title>{ Constants.manifest.name }</Title>
        </Body>
      </Header>
    );
  }
}
