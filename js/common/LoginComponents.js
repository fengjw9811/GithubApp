/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
  Linking,
} from 'react-native';

export function Input(props) {
  const {label, placeholder, shortLine, secure, onChangeText} = props;
  return (
    <View style={{backgroundColor: 'white'}}>
      <View style={styles.row}>
        <Text style={styles.inputLabel}>{label}</Text>
        <TextInput
          placeholder={placeholder}
          secureTextEntry={secure}
          autoCapitalize={'none'}
          onChangeText={onChangeText}
        />
      </View>
      <View
        style={{
          height: 0.5,
          backgroundColor: '#D0D4D4',
          marginLeft: shortLine ? 20 : 0,
        }}
      />
    </View>
  );
}

export function ConfirmButton(props) {
  const {title, onClick} = props;
  return (
    <TouchableOpacity style={styles.confirmLayout} onPress={onClick}>
      <Text style={styles.confirmTitle}>{title}</Text>
    </TouchableOpacity>
  );
}

export function Tips(props) {
  const {msg, helpUrl} = props;
  return (
    <View style={styles.tipsLayout}>
      <Text style={styles.tips}>{msg}</Text>
      {!!helpUrl && (
        <Button
          title="查看帮助"
          onPress={() => {
            Linking.openURL(helpUrl);
          }}
        />
      )}
    </View>
  );
}
export function NavBar(props) {
  const {leftTitle, rightTitle, onRightClick} = props;
  return (
    <View style={styles.navBar}>
      <View />
      <View style={styles.leftTitleLayout}>
        <Text style={styles.leftTitle}>{leftTitle}</Text>
      </View>
      <TouchableOpacity onPress={onRightClick}>
        <Text style={styles.rightTitle}>{rightTitle}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  inputLabel: {
    marginLeft: 15,
    marginTop: 18,
    marginBottom: 18,
    fontSize: 16,
    width: 90,
  },
  confirmLayout: {
    backgroundColor: '#2196F3',
    alignItems: 'center',
    padding: 12,
    margin: 20,
    marginTop: 30,
    borderRadius: 5,
  },
  confirmTitle: {
    fontSize: 20,
    color: 'white',
  },
  tipsLayout: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tips: {
    fontSize: 14,
    color: 'red',
  },
  navBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 44,
  },
  leftTitleLayout: {
    alignItems: 'center',
    justifyContent: 'center',
    positipon: 'absolute',
    left: 26,
  },
  leftTitle: {
    fontSize: 20,
  },
  rightTitle: {
    color: '#007AFF',
    paddingRight: 15,
    fontSize: 16,
  },
});
