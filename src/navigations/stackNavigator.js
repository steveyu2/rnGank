import { createStackNavigator } from "react-navigation";
import { Text } from "react-native";
import { SCREENS } from "~/common/constants";
import DrawerNavigator from "./drawerNavigator";
import WebView from "../screens/stack/webView";
import Apptest from "../screens/Apptest";

const RouteConfigs = {
  apptest: { screen: Apptest },
  [SCREENS.S.ROOT]: {
    screen: DrawerNavigator,
    navigationOptions: { header: null }
  },
  [SCREENS.S.WEBVIEW]: { screen: WebView }
};
const StackNavigatorConfig = {
  initialRouteName: SCREENS.S.ROOT,
  // initialRouteName: 'apptest',
  mode: "card", //card model
  headerMode: "screen" // screen float
};

const stackNavigator = createStackNavigator(RouteConfigs, StackNavigatorConfig);

export default stackNavigator;
