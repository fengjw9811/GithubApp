import React, {useState} from 'react';
import {SafeAreaView, TouchableOpacity, Text, StyleSheet} from 'react-native';
import Constants from './expand/dao/Constants';
import {get, post} from './expand/dao/HiNet';

export default function FetchDemoPage() {
  const [msg, setMsg] = useState('');
  const fetchAction = () => {
    get(Constants.test.api)({requestPrams: 'RN'})
      .then(res => {
        setMsg(JSON.stringify(res));
      })
      .catch(err => {
        setMsg(JSON.stringify(err));
      });

    // const formData = new FormData();
    // formData.append('requestPrams', 'RN');
    // post(Constants.test.api)(formData)()
    //   .then(res => {
    //     setMsg(JSON.stringify(res));
    //   })
    //   .catch(err => {
    //     setMsg(JSON.stringify(err));
    //   });
  };
  return (
    <SafeAreaView style={styles.root}>
      <TouchableOpacity onPress={fetchAction}>
        <Text>加载</Text>
      </TouchableOpacity>
      <Text>{msg}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
