import React, { Component } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import Swiper from 'react-native-swiper';
const { width, height } = require('Dimensions').get('window');
import ImageCover from '../components/ImageCover';

export default class  Home extends Component {

  render () {
    return (
      <Swiper autoplay={true}>
        <ImageCover />
        <ImageCover />
        <ImageCover />
        <ImageCover />
      </Swiper>
    )
  };
}
