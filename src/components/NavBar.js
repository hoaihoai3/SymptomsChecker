import React, { Component } from 'react';

import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer
} from 'react-navigation';
import { Ionicons } from 'react-native-vector-icons';
import HomePage from './HomePage';
import ProfilePage from './ProfilePage';
import HistoryPage from './HistoryPage';
import SettingsPage from './SettingsPage';

//
// const HomeStack = createStackNavigator({
//   Home: { screen: HomeScreen },
//   Details: { screen: DetailsScreen },
// });
//
// const SettingsStack = createStackNavigator({
//   Settings: { screen: SettingsScreen },
//   Details: { screen: DetailsScreen },
// });

export default createAppContainer(createBottomTabNavigator(
  {
    Home: { screen: HomePage },
    Profile: { screen: ProfilePage },
    History: { screen: HistoryPage },
    Settings: { screen: SettingsPage },
  }
  // {
  //   defaultNavigationOptions: ({ navigation }) => ({
  //     tabBarIcon: ({ tintColor }) => {
  //       const { routeName } = navigation.state;
  //       let iconName;
  //       if (routeName === 'Home') {
  //         iconName = 'ios-information-circle';
  //       } else if (routeName === 'Settings') {
  //         iconName = 'ios-options';
  //       }
  //
  //       // You can return any component that you like here! We usually use an
  //       // icon component from react-native-vector-icons
  //       return <Ionicons name={iconName} size={25} color={tintColor} />;
  //     },
  //   }),
  //   tabBarOptions: {
  //     activeTintColor: 'tomato',
  //     inactiveTintColor: 'gray',
  //   },
  // }
));
