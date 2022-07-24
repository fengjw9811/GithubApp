import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import NavigationUtil from '../navigator/NavigationUtil';
import DynamicTabNavigators from '../navigator/DynamicTabNavigators';

export default class HomePage extends Component {
  render() {
    //方便其他页面跳转，可以不传navigation
    NavigationUtil.navigation = this.props.navigation;
    return <DynamicTabNavigators />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
  },
});
