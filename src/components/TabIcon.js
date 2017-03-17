import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

export default class TabIcon extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Tab</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  title: {
    fontSize: 14
  }
});
