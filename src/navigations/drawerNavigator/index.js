import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { DrawerNavigator, DrawerItems } from "react-navigation";
import { DRAWER_WIDTH, SCREENS } from "../../commons/constants";
import ContentComponent from "./contentComponent";
import random from '../../logics/random/views/drawerScreen';

const drawerNavigator = DrawerNavigator({
  [SCREENS.D.RANDOM]: { screen: random },
  [SCREENS.D.RANDOM+1]: { screen: random },
},{
  initialRouteName: SCREENS.D.HOME,
  // order: [ ],
  contentComponent: ContentComponent,
  drawerWidth: DRAWER_WIDTH, // 侧拉导航的宽度
});

export default drawerNavigator;