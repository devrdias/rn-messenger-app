import React from 'react';
import { createStackNavigator } from 'react-navigation';
import SearchHeader from '../components/SearchHeader';
import SearchScreen from '../containers/Search';
import CameraScreen from '../containers/CameraScreen';
import BottomTabNavigation from './bottomTabNavigator';

const SearchStack = createStackNavigator(
  {
    BottomTabNavigation: {
      screen: BottomTabNavigation,
      navigationOptions: {
        gesturesEnabled: false,
      },
    },
    SearchScreen: {
      screen: SearchScreen,
      navigationOptions: {
        gestureEnabled: false,
      },
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  },
);

const ModalStack = createStackNavigator(
  {
    SearchStack: {
      screen: SearchStack,
      navigationOptions: {
        gestureEnabled: false,
        header: <SearchHeader />,
      },
    },
    CameraScreen: {
      screen: CameraScreen,
      navigationOptions: {
        gestureEnabled: false,
        header: null,
      },
    },
  },
  {
    mode: 'modal',
  },
);

const MessengerApp = createStackNavigator(
  {
    MainScreen: {
      screen: ModalStack,
      navigationOptions: { gestureEnabled: false, header: null },
    },
  },
  {
    headerMode: 'none',
  },
);

export default MessengerApp;
