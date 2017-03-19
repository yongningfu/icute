import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';

var TabImg = {
  home: [require('../img/home.png'), require('../img/home_active.png')],
  shopping: [require('../img/shopping.png'), require('../img/shopping_active.png')],
  profile: [require('../img/aboutme.png'), require('../img/aboutme_active.png')]
}

export default class TabIcon extends React.Component {

  render() {
    const { iconImage, selected }  = this.props;
    const imgIndex = selected ? 1 : 0;
    return (
        <Image source={TabImg[iconImage][imgIndex]} 
          style={[{width: 50, height:50, resizeMode:"stretch"}, 
                  selected ? styles.selected : {}]}/>
    );
  }
}

const styles = StyleSheet.create({
  selected: {
    width: 53,
    height: 53,
  }
});
