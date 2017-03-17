import React from 'react';
import { connect } from 'dva/mobile';
import {
  StyleSheet,
  Navigator,
  Image,
  View
} from 'react-native';

import {
  Router,
  Scene,
  ActionConst
} from 'react-native-router-flux';

import Page from './routes/Page';
import Page2 from './routes/Page2';
import TabIcon from './components/TabIcon';

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


class RouterComponent extends React.Component {

  render() {
    return (
      <Router
        getSceneStyle={getSceneStyle}
        navigationBarStyle={styles.navBar}
        titleStyle={styles.navBarTitle}
      >
        <Scene key="root">
          {/*<Scene key="test"  component={RecordPlay} text="123"></Scene>*/}          
          <Scene key="tabbar" tabs pressOpacity={0.8} type={ActionConst.REPLACE} >
            <Scene
              key="home"
              component={Page}
              text="首页"
              icon={TabIcon}
            />
            <Scene
              key="shopping"
              component={Page2}
              title="购物"
              icon={TabIcon}
            />
            <Scene
              key="profile"
              component={Page}
              title="关于"
              icon={TabIcon}
            />
            <Scene
              key="apiTest"
              component={Page}
              title="icute"
              icon={TabIcon}
            />
          </Scene>
        </Scene>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: '#fff',
  },
  navBarTitle: {
    color: '#fff',
    fontSize: 20,
  }
});

export default connect()(RouterComponent);