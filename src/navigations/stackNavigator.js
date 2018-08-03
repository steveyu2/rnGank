import { createStackNavigator } from 'react-navigation';
import { Text } from 'react-native';
import { SCREENS } from '../commons/constants';
import Home from '../screens/stack/home';
import WebView from '../screens/stack/webView';
import Apptest from '../screens/Apptest';

const RouteConfigs = {
  apptest: {
    screen: Apptest,
    navigationOptions: {
      title: 'Apptest'
    },
  },
  [SCREENS.S.HOME]: {
    screen: Home,
    navigationOptions: {
      title: 'Home'
    },
  },
  [SCREENS.S.WEBVIEW]: {
    screen: WebView,
    navigationOptions: {
      title: 'WebView'
    },
  }
};
const StackNavigatorConfig = {
  // initialRouteName: SCREENS.S.Home,
  initialRouteName: 'apptest',
  // mode: 'card',  //card
  headerMode: 'float', // screen float
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#3e9ce9',
    },
    headerTitleStyle: {
      color: '#fff',
      fontSize: 20,
    },
    headerTintColor: '#fff',
  },
};

const AppNavigator = createStackNavigator(RouteConfigs, StackNavigatorConfig);

export default AppNavigator;