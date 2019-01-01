import { createDrawerNavigator, DrawerItems } from "react-navigation";
import { DRAWER_WIDTH, SCREENS } from "~/common/constants";
import ContentComponent from "./contentComponent";
import random from "~/logics/random/views/drawerScreen";
import skill from "~/logics/appointType/views/skillDrawerScreen";
import leisure from "~/logics/appointType/views/leisureDrawerScreen";
import dayNew from "~/logics/appointType/views/dayNewDrawerScreen";
import setting from "~/logics/userSetting/views/drawerScreen";

const drawerNavigator = createDrawerNavigator(
  {
    [SCREENS.D.DAYNEW]: { screen: dayNew },
    [SCREENS.D.RANDOM]: { screen: random },
    [SCREENS.D.SKILL]: { screen: skill },
    [SCREENS.D.LEISURE]: { screen: leisure },
    [SCREENS.D.SETTING]: { screen: setting }
  },
  {
    initialRouteName: SCREENS.D.DAYNEW,
    // initialRouteName: SCREENS.D.RANDOM,
    // order: [ ],
    contentComponent: ContentComponent,
    drawerWidth: DRAWER_WIDTH // 侧拉导航的宽度
  }
);

export default drawerNavigator;
