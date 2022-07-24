import React, {useState} from 'react';
import {SafeAreaView, View, StyleSheet} from 'react-native';
import {Input, ConfirmButton, Tips, NavBar} from '../common/LoginComponents';
import LoginDao from '../expand/dao/LoginDao';
import NavigationUtil from '../navigator/NavigationUtil';

export default function LoginPage(props) {
  const {navigation} = props;
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('ddd');
  const [helpUrl, setHelpurl] = useState(
    'https://doc.devio.org/api-help/docs/rn-api-help.html',
  );
  const onLogin = () => {
    if (userName === '' || password === '') {
      setMsg('用户名或密码不能为空');
      return;
    }
    setMsg('');
    setHelpurl('');
    const LoginDaoFn = LoginDao();
    LoginDaoFn()
      .login(userName, password)
      .then(res => {
        setMsg('登录成功');
        //清空之前到堆栈，跳转到首页
        NavigationUtil.resetToHomePage({navigation});
      })
      .catch(err => {
        const {code, data: {helpUrl = ''} = {}, msg} = err;
        setMsg(msg);
      });
  };

  const jumpToRegistrationPage = () => {
    NavigationUtil.registration({navigation});
  };

  return (
    <SafeAreaView style={styles.root}>
      <NavBar
        leftTitle="登录"
        rightTitle="注册"
        onRightClick={jumpToRegistrationPage}
      />
      <View style={styles.line} />
      <View style={styles.content}>
        <Input
          label="用户名"
          placeholder="请输入用户名"
          shortLine={true}
          onChangeText={text => setUserName(text)}
        />
        <Input
          label="密码"
          placeholder="请输入密码"
          secure={true}
          onChangeText={text => setPassword(text)}
        />
        <ConfirmButton title="登录" onClick={onLogin} />
        <Tips msg={msg} helpUrl={helpUrl} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  content: {
    paddingTop: 20,
    backgroundColor: '#F1F5F6',
    flexGrow: 1,
  },
  line: {
    height: 0.5,
    backgroundColor: '#D0D4D4',
  },
});
