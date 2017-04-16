import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import Avatar from './Avatar'

export default class TextIcon extends Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
      <View style={styles.container}> 
        <Avatar source={require('../img/clothes_lolita.png')} size="medium"></Avatar>
        <Text>刘涛</Text>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  }
});


