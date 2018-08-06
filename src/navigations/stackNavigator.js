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
      header: null
    }
  },
  [SCREENS.S.HOME]: {
    screen: Home,
  },
  [SCREENS.S.WEBVIEW]: {
    screen: WebView,
  },
};
const StackNavigatorConfig = {
  // initialRouteName: SCREENS.S.Home,
  initialRouteName: 'apptest',
  mode: 'card',  //card model
  headerMode: 'screen', // screen float
};

const AppNavigator = createStackNavigator(RouteConfigs, StackNavigatorConfig);

export default AppNavigator;