import React, { Component } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { DrawerItems, StackActions, NavigationActions } from "react-navigation";
import { connect } from "react-redux";
import theme from "~/common/theme";
import NavHeader from "./header";
import NavFooter from "./footer";

class ContentComponent extends Component {
  constructor() {
    super();

    this._onItemPress = this._onItemPress.bind(this);
  }

  _onItemPress = ({ route, focused }) => {
    // const navigation = this.props.navigation;
    // navigation.navigate('DrawerClose')
    // setTimeout(() => navigation.navigate(route.routeName), 0);
    if (!focused) {
      let subAction;
      // TODO (v3): Revisit and repeal this behavior:
      // if the child screen is a StackRouter then always navigate to its first screen (see #1914)
      if (route.index != null && route.index !== 0) {
        subAction = StackActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({
              routeName: route.routes[0].routeName
            })
          ]
        });
      }
      this.props.navigation.dispatch(
        NavigationActions.navigate({
          routeName: route.routeName,
          action: subAction
        })
      );
    }
  };

  render() {
    const { mainColor, navigation } = this.props;

    return (
      <View style={[styles.container, theme.drawerContainerStyle]}>
        <ScrollView style={styles.drawer} alwaysBounceVertical={false}>
          <NavHeader mainColor={mainColor} />
          <DrawerItems
            {...this.props}
            onItemPress={this._onItemPress}
            activeTintColor={theme.drawerNavActiveTextStyle.color || mainColor}
            inactiveTintColor={theme.drawerNavTextStyle.color}
          />
        </ScrollView>
        <NavFooter navigation={navigation} onItemPress={this._onItemPress} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default connect(({ userSetting }) => {
  return {
    mainColor: userSetting.mainColor
  };
})(ContentComponent);
