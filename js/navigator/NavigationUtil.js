import {StackActions} from '@react-navigation/native';

export default class NavigationUtil {
  static goPage(params, page) {
    const navigation = NavigationUtil.navigation || (params || {}).navigation;
    if (!navigation) {
      console.log('NavigationUtil.navigation can not be null');
      return;
    }
    navigation.navigate(page, {
      ...params,
      navigation,
    });
  }

  //返回上一页
  static goBack(navigation) {
    navigation.goBack();
  }

  //重置到首页
  static resetToHomePage(params) {
    const {navigation} = params;
    navigation.dispatch(StackActions.replace('HomePage'));
  }

  //重置到登录
  static login(params = {}) {
    let {navigation} = params;
    if (!navigation) {
      navigation = NavigationUtil.navigation;
    }
    navigation.dispatch(StackActions.replace('LoginPage', {}));
  }

  //重置到注册
  static registration(params = {}) {
    let {navigation} = params;
    if (!navigation) {
      navigation = NavigationUtil.navigation;
    }
    navigation.dispatch(StackActions.replace('RegistrationPage', {}));
  }
}
