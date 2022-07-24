import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {Component} from 'react';

import PopularPage from '../page/PopularPage';
import TrendingPage from '../page/TrendingPage';
import FavoritePage from '../page/FavoritePage';
import MyPage from '../page/MyPage';
import Entrypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
const TABS = {
  //页面路由
  PopularPage: {
    screen: PopularPage,
    options: {
      tabBarLabel: '最热',
      headerShow: false,
      tabBarIcon: ({color, size}) => (
        <MaterialIcons name="whatshot" color={color} size={size} />
      ),
    },
  },
  TrendingPage: {
    screen: TrendingPage,
    options: {
      tabBarLabel: '趋势',
      headerShow: false,
      tabBarIcon: ({color, size}) => (
        <Ionicons name="md-trending-up" color={color} size={size} />
      ),
    },
  },
  FavoritePage: {
    screen: FavoritePage,
    options: {
      tabBarLabel: '收藏',
      headerShow: false,
      tabBarIcon: ({color, size}) => (
        <MaterialIcons name="favorite" color={color} size={size} />
      ),
    },
  },
  MyPage: {
    screen: MyPage,
    options: {
      tabBarLabel: '我的',
      headerShow: false,
      tabBarIcon: ({color, size}) => (
        <Entrypo name="user" color={color} size={size} />
      ),
    },
  },
};

export default class DynamicTabNavigators extends Component {
  _tabNavigator() {
    const {PopularPage, TrendingPage, FavoritePage, MyPage} = TABS;
    const tabs = {PopularPage, TrendingPage, FavoritePage, MyPage};
    return (
      <Tab.Navigator>
        {Object.entries(tabs).map(item => {
          return (
            <Tab.Screen
              key={item[0]}
              name={item[0]}
              component={item[1].screen}
              options={item[1].options}
            />
          );
        })}
      </Tab.Navigator>
    );
  }
  render() {
    return this._tabNavigator();
  }
}
