import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import NavigationUtil from '../navigator/NavigationUtil';

export default class WelcomePage extends Component {
  componentDidMount() {
    this.doLanuch();
  }
  componentWillUnmount() {
    this.timer && clearTimeout(this.timer);
  }

  // 是否有登录态，有就跳转到首页，没有就跳转到登录页
  async doLanuch() {
    const boarding = await boarding;
    const {navigation} = this.props;
    this.timer = setTimeout(() => {
      if (boarding) {
        NavigationUtil.resetToHomePage({navigation});
      } else {
        NavigationUtil.login({navigation});
      }
    }, 200);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>最热</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
