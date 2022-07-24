import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class PopularPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>MyPage</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
