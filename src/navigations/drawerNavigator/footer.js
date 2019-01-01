import React, { Component, PureComponent } from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { Icon } from "react-native-elements";
import { adaptUnits, FONT_SIZE, SCREENS } from "~/common/constants";
import theme from "~/common/theme";
import MyButton from "../../components/button";

class MyIcon extends PureComponent {
  render() {
    return (
      <Icon
        raised
        component={_props => (
          <MyButton {..._props} noAction onPress={this.props.onPress} />
        )}
        containerStyle={[styles.icon, { backgroundColor: "#FA8072" }]}
        size={adaptUnits(15, "F")}
        color="#fff" // #F4A460
        type="material-community"
        name="puzzle"
        {...this.props}
      />
    );
  }
}

class DrawerNavigatorFooter extends Component {
  constructor() {
    super();

    this._gotoSetting = this._gotoSetting.bind(this);
  }

  _gotoSetting() {
    this.props.onItemPress({
      route: { routeName: SCREENS.D.SETTING },
      focused: false
    });
  }

  render() {
    return (
      <View style={[styles.container, theme.drawerFooterContainerStyle]}>
        {/* 主题 */}
        {/* <MyIcon
        containerStyle={[styles.icon, {backgroundColor: "#FA8072"}]} // #F4A460
        name="puzzle"
        onPress={()=>console.log(1)}
      /> */}
        {/* 设置 */}
        <MyIcon
          raised
          containerStyle={[styles.icon, { backgroundColor: "#4682B4" }]}
          name="settings"
          onPress={this._gotoSetting}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingHorizontal: adaptUnits(18, "W"),
    width: "100%",
    height: adaptUnits(100, "H"),
    borderColor: "#ddd",
    borderTopWidth: adaptUnits(1, "H")
  },
  icon: {
    margin: 0,
    marginHorizontal: adaptUnits(10, "W"),
    borderRadius: 50
  }
});

export default DrawerNavigatorFooter;
