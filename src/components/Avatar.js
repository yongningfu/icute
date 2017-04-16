import React from 'react';
import {
  Image,
  StyleSheet,
  TouchableOpacity
 } from 'react-native';

import {Actions } from 'react-native-router-flux';

const Avatar= (props) => {
  var { source, size, style, onPress} = props;

  return (
    <TouchableOpacity onPress={ onPress || (() => {}) }>
      <Image source={source} style={[size ? styles[size]: styles["small"], style]} />
    </TouchableOpacity>
  );
};

const largeSize = 80;
const mediumSize = 60;
const smallSize = 40;

const styles = StyleSheet.create({
  large: {
    width: largeSize,
    height: largeSize,
    borderRadius: largeSize / 2
  },
  medium: {
    width: mediumSize,
    height: mediumSize,
    borderRadius: mediumSize / 2,
  },
  small: {
    width: smallSize,
    height: smallSize,
    borderRadius: smallSize / 2
  }
});

export default Avatar;
