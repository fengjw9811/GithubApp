import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class FavoritePage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>FavoritePage</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
