import React from 'react';
import { createStackNavigator } from 'react-navigation';
import SearchHeader from '../components/SearchHeader';
import CameraScreen from '../containers/Camera/index';
import BottomTabNavigation from './bottomTabNavigator';

const ModalStack = createStackNavigator(
  {
    BottomTabNavigation: {
      screen: BottomTabNavigation,
      navigationOptions: {
        gesturesEnabled: false,
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
