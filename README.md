# Reasoning tests app

[guide](https://github.com/react-community/create-react-native-app/blob/master/react-native-scripts/template/README.md).

## Install 

    npm i
    npm i -g exp

## Switch versions

    ln -sF manifests/numerical/app.json app.json 
    ln -sF manifests/verbal/app.json app.json

## Test

    npm test
    npm test:watch

## Emulate
    
    npm run ios
    npm run android

## Build

    exp build:ios
    exp build:android

## Publish

    exp publish
