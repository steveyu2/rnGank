import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { DrawerNavigator, DrawerItems } from "react-navigation";
import { DRAWER_WIDTH, SCREENS } from "../../commons/constants";
import ContentComponent from "./contentComponent";
import random from '../../logics/random/views/drawerScreen';
import skill from '../../logics/appointType/views/skillDrawerScreen';
import leisure from '../../logics/appointType/views/leisureDrawerScreen';
import dayNew from '../../logics/appointType/views/dayNewDrawerScreen';


const drawerNavigator = DrawerNavigator({
  [SCREENS.D.DAYNEW]: { screen: dayNew },
  [SCREENS.D.RANDOM]: { screen: random },
  [SCREENS.D.SKILL]: { screen: skill },
  [SCREENS.D.LEISURE]: { screen: leisure },
},{
  initialRouteName: SCREENS.D.HOME,
  // order: [ ],
  contentComponent: ContentComponent,
  drawerWidth: DRAWER_WIDTH, // 侧拉导航的宽度
});

export default drawerNavigator;