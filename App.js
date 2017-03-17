import React from 'react';
import { AppRegistry } from 'react-native';
import dva from 'dva/mobile';

import Router from './src/Router';

if (!__DEV__) {
  global.console = {
    info: () => {},
    log: () => {},
    warn: () => {},
    error: () => {},
  }
}

const app = dva();

app.router(() => <Router />);

AppRegistry.registerComponent('icute', () => app.start());