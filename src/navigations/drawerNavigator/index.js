import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { DrawerNavigator, DrawerItems } from "react-navigation";
import { DRAWER_WIDTH, SCREENS } from "../../commons/constants";
import ContentComponent from "./contentComponent";
import Home from '../../screens/drawer/home';

const drawerNavigator = DrawerNavigator({
  [SCREENS.D.HOME]: { screen: Home },
  [SCREENS.D.HOME+1]: { screen: Home },
},{
  initialRouteName: SCREENS.D.HOME,
  // order: [ ],
  contentComponent: ContentComponent,
  drawerWidth: DRAWER_WIDTH, // 侧拉导航的宽度
});

export default drawerNavigator;