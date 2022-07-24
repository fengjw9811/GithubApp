import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import keys from '../res/data/keys.json';
import {tabNav} from '../navigator/NavigationDelegate';

export default class PopularPage extends Component {
  render() {
    const TabNavigator = keys.length
      ? tabNav({Component: popularTab, theme: {themeColor: '#2196f3'}, keys})
      : null;
    return <View style={styles.container}>{TabNavigator}</View>;
  }
}
class popularTab extends Component {
  render() {
    const {tabLabel} = this.props;
    return <Text>{tabLabel}</Text>;
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
