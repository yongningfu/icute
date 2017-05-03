import React from 'react';
import { connect } from 'dva/mobile';
import {
  StyleSheet,
  Navigator,
} from 'react-native';

import {
  Router,
  Scene,
  ActionConst,
} from 'react-native-router-flux';

import Page from './routes/Page';
import Page2 from './routes/Page2';
import TabIcon from './components/TabIcon';
import Home from './routes/Home';

const getSceneStyle = (props, computedProps) => {
  const style = {
    flex: 1,
    backgroundColor: '#fff',
    shadowColor: null,
    shadowOffset: null,
    shadowOpacity: null,
    shadowRadius: null,
  };
  if (computedProps.isActive) {
    style.marginTop = computedProps.hideNavBar ?
      0 : Navigator.NavigationBar.Styles.General.TotalNavHeight;
    style.marginBottom = computedProps.hideTabBar ? 0 : 50;
  }
  return style;
};

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: '#fff',
  },
  navBarTitle: {
    color: '#fff',
    fontSize: 20,
  },
});

function RouterComponent() {
  return (
    <Router
      getSceneStyle={getSceneStyle}
      navigationBarStyle={styles.navBar}
      titleStyle={styles.navBarTitle}
    >
      <Scene key="root">
        {/* <Scene key="test"  component={RecordPlay} text="123"></Scene> */}
        <Scene key="tabbar" tabs pressOpacity={0.8} type={ActionConst.REPLACE} >
          <Scene
            key="home"
            component={Home}
            text="首页"
            iconImage="home"
            icon={TabIcon}
          />
          <Scene
            key="shopping"
            component={Page2}
            title="购物"
            iconImage="shopping"
            icon={TabIcon}
          />
          <Scene
            key="profile"
            component={Page}
            iconImage="profile"
            title="关于"
            icon={TabIcon}
          />
          {/* <Scene
            key="apiTest"
            component={Page}
            title="icute"
            iconImage="profile"
            icon={TabIcon}
          /> */}
        </Scene>
      </Scene>
    </Router>
  );
}
export default connect()(RouterComponent);
