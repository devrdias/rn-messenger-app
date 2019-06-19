import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import TabIcon from '../components/TabIcon';
import HomeTabNavigation from './homeTabNavigator';
import FriendsScreen from '../containers/Friends/index';
import CameraScreen from '../containers/Camera/index';
import GamesScreen from '../containers/Games/index';
import PopularScreen from '../containers/Popular/index';
import AppStyles from '../config/styles';
import NavigationService from '../services/NavigationService';

const routesConfig = {
  headerMode: 'none',
  tabBarOptions: {
    showLabel: false,
    activeTintColor: AppStyles.colors.accentColor,
    inactiveTintColor: AppStyles.colors.inactiveGreyColor,
    pressColor: AppStyles.colors.lightGreyColor,
  },
};

// * Icons
const HomeTabIcon = ({ tintColor }) => <TabIcon name="home" tintColor={tintColor} />;
const FriendsTabIcon = ({ tintColor }) => (
  <TabIcon name="supervisor-account" tintColor={tintColor} />
);
const CameraTabIcon = ({ tintColor }) => (
  <TabIcon type="rounded" name="photo-camera" tintColor={tintColor} />
);
const GameTabIcon = ({ tintColor }) => (
  <TabIcon type="entypo" name="game-controller" tintColor={tintColor} />
);
const PopularTabIcon = ({ tintColor }) => <TabIcon name="toys" tintColor={tintColor} />;

export default createBottomTabNavigator(
  {
    HomeScreen: {
      screen: HomeTabNavigation,
      navigationOptions: {
        tabBarIcon: HomeTabIcon,
      },
    },
    FriendsScreen: {
      screen: FriendsScreen,
      navigationOptions: {
        tabBarIcon: FriendsTabIcon,
      },
    },
    CameraTabScreen: {
      screen: CameraScreen,
      navigationOptions: {
        header: null,
        tabBarIcon: CameraTabIcon,
        tabBarOnPress: () => {
          NavigationService.navigate('CameraScreen');
        },
      },
    },
    GamesScreen: {
      screen: GamesScreen,
      navigationOptions: {
        tabBarIcon: GameTabIcon,
      },
    },
    PopularScreeen: {
      screen: PopularScreen,
      navigationOptions: {
        tabBarIcon: PopularTabIcon,
      },
    },
  },
  routesConfig,
);
