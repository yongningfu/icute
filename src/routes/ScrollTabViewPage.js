import React, { Component } from 'react';
import {
  Text,
} from 'react-native';

import ScrollableTabView from 'react-native-scrollable-tab-view';
import CustomTabBar from '../components/CustomTabBar';

export default class ScrollTabViewPage extends Component {
  render() {
    return (
      <ScrollableTabView
        renderTabBar={() => <CustomTabBar />}
      >
        <Text tabLabel='Tab #1'>首页对应的页面</Text>
        <Text tabLabel='Tab #2'>阅读对应的页面</Text>
        <Text tabLabel='Tab #3'>关于对应的页面</Text>
      </ScrollableTabView>
    );
  }
}

