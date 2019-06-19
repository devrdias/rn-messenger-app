import { Platform } from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation';
import AppStyles from '../config/styles';
import ActivesScreen from '../containers/Actives';
import CallsScreen from '../containers/Calls';
import GroupsScreen from '../containers/Groups';
import MessagesScreen from '../containers/Messages';

const routesConfig = {
  tabBarPosition: 'top',
  tabBarOptions: {
    activeTintColor: AppStyles.colors.accentColor,
    inactiveTintColor: AppStyles.colors.inactiveGreyColor,
    pressColor: AppStyles.colors.lightGreyColor,
    labelStyle: {
      fontWeight: 'bold',
      fontSize: Platform.OS === 'ios' ? 10 : 12,
      // TODO: install fonts on IOs
      //   fontFamily: AppStyles.fonts.FONT_MEDIUM,
    },
    indicatorStyle: {
      backgroundColor: AppStyles.colors.accentColor,
    },
    style: {
      backgroundColor: AppStyles.colors.white,
    },
  },
};

export default createMaterialTopTabNavigator(
  {
    MessagesScreen: {
      screen: MessagesScreen,
      navigationOptions: {
        header: null,
        title: 'Messages',
      },
    },
    ActivesScreen: {
      screen: ActivesScreen,
      navigationOptions: {
        header: null,
        title: 'Active',
      },
    },
    GroupsScreen: {
      screen: GroupsScreen,
      navigationOptions: {
        header: null,
        title: 'Groups',
      },
    },
    CallsScreen: {
      screen: CallsScreen,
      navigationOptions: {
        header: null,
        title: 'Calls',
      },
    },
  },
  routesConfig,
);
