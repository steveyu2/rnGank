import React, { PureComponent } from "react";
import { StyleSheet } from "react-native";
import NavigateHeader, { HeaderButton } from "./navigateHeader";

class DrawerNavigateHeader extends PureComponent {
  constructor() {
    super();

    this.navLeftComponent = this.navLeftComponent.bind(this);
    this.navMenuOnPress = this.navMenuOnPress.bind(this);
  }

  navMenuOnPress() {
    const { navigation } = this.props;

    navigation.openDrawer();
  }

  navLeftComponent() {
    const { navigation, leftComponent = false } = this.props;
    const menu = (
      <HeaderButton noAction name="md-menu" onPress={this.navMenuOnPress} />
    );

    if (leftComponent) {
      return leftComponent(menu);
    }

    return menu;
  }

  render() {
    const { navigation } = this.props;

    return (
      <NavigateHeader
        backBtn={false}
        navigation={navigation}
        {...this.props}
        leftComponent={
          <HeaderButton name="md-menu" onPress={this.navMenuOnPress} /> ||
          this.navLeftComponent()
        }
      />
    );
  }
}

const styles = StyleSheet.create({});

export default DrawerNavigateHeader;
