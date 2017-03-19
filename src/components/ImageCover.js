
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
} from 'react-native';

var Dimensions = require('Dimensions');
var {height, width} = Dimensions.get('window');

export default class ImageCover extends Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../img/test/3.jpg')} style={styles.backgroundImg}>
        </Image>
        <Image source={require('../img/swiper_image_border.png')} style={styles.borderImg}></Image>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  backgroundImg: {

    width: width - 15,
    height: height / 4,
    resizeMode: 'stretch',
    borderRadius: 10,
  },
  borderImg: {
    position: 'absolute',
    width: width - 10,
    height: height / 4,
    resizeMode: 'stretch',
  }
});


