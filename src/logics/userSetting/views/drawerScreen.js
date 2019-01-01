import React, { Component, PureComponent } from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { Icon } from "react-native-elements";
import { FONT_SIZE, SPACING, adaptUnits } from "~/common/constants";
import i18n from "~/common/i18n";
import theme from "~/common/theme";
import DrawerNavigateHeader from "~/components/drawerNavigateHeader";
import Button from "~/components/button";
import * as userSettingAction from "../action";

class userSetiingDrawerScreen extends Component {
  static navigationOptions = ({
    navigation,
    screenProps: { i18n, theme }
  }) => ({
    drawerLabel: i18n.setting,
    drawerIcon: ({ focused, tintColor }) => (
      <Icon
        name="settings"
        type="material-community"
        color={focused ? tintColor : "#000"}
      />
    )
  });

  constructor(props) {
    super(props);

    this.languges = {
      zh: "chinese",
      jp: "japanese",
      en: "english"
    };

    this.languges = {
      zh: "chinese",
      jp: "japanese",
      en: "english"
    };

    this.themes = {
      normal: "normalMode",
      night: "nightMode"
    };

    this.mainColors = {
      black: "#383838",
      blue: "#2196f3",
      red: "#B22222"
      //2F4F4F
    };
  }

  render() {
    const {
      mainColor,
      bgColor,
      navigation,
      themeName,
      languge,
      setUserSetting
    } = this.props;
    const { languges, themes, mainColors } = this;
    const titleColor = theme.lightText.color || "#666";
    const TextColor = theme.text.color || "#000";
    const iconColor = theme.lightText.color || mainColor;

    const langugeOptions = Object.keys(languges).map(v => (
      <CheckView
        key={v}
        text={i18n[languges[v]]}
        textColor={TextColor}
        iconColor={iconColor}
        onPress={setUserSetting}
        params={{ languge: v }}
        active={v === languge}
      />
    ));

    const themeOptions = Object.keys(themes).map(v => (
      <CheckView
        key={v}
        text={i18n[themes[v]]}
        textColor={TextColor}
        iconColor={iconColor}
        onPress={setUserSetting}
        params={{ themeName: v }}
        active={v === themeName}
      />
    ));

    const mainColorOptions = Object.keys(mainColors).map(v => (
      <CheckView
        key={v}
        text={i18n[v]}
        textColor={mainColors[v] === "#383838" ? TextColor : mainColors[v]}
        iconColor={iconColor}
        onPress={setUserSetting}
        params={{ mainColor: mainColors[v] }}
        active={mainColors[v] === mainColor}
      />
    ));

    return (
      <View
        style={[
          styles.container,
          { backgroundColor: bgColor },
          theme.container
        ]}
      >
        <DrawerNavigateHeader
          title={i18n.setting}
          navigation={navigation}
          style={[{ backgroundColor: mainColor }, theme.headerStyle]}
        />
        <Title text={i18n.languge} textColor={titleColor} />
        {langugeOptions}
        <Title text={i18n.theme} textColor={titleColor} />
        {themeOptions}
        <Title text={i18n.mainColor} textColor={titleColor} />
        {mainColorOptions}
      </View>
    );
  }
}

const Title = ({ text, textColor }) => (
  <View style={styles.titleWrap}>
    <Text style={[styles.titleText, { color: textColor }]}>{text}</Text>
  </View>
);
class CheckView extends PureComponent {
  constructor() {
    super();

    this._onPress = this._onPress.bind(this);
  }

  _onPress() {
    const { onPress = () => {} } = this.props;
    let { params = [] } = this.props;

    params = Array.isArray(params) ? params : [params];
    onPress(...params);
  }

  render() {
    const { text, textColor, active, iconColor } = this.props;

    return (
      <Button onPress={this._onPress}>
        <View style={styles.CheckViewWrap}>
          <Text style={[styles.CheckViewText, { color: textColor }]}>
            {text}
          </Text>
          {active && (
            <Icon
              name="md-checkmark-circle-outline" // md-checkbox-outline
              type="ionicon"
              size={adaptUnits(30, "H")}
              color={iconColor}
            />
          )}
        </View>
      </Button>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  titleWrap: {
    padding: SPACING * 1.5,
    paddingBottom: SPACING * 0.8
    // paddingRight: SPACING,
  },
  titleText: {
    fontSize: FONT_SIZE.XS,
    color: "#666"
  },
  CheckViewWrap: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: SPACING * 2,
    paddingRight: SPACING * 2,
    height: adaptUnits(80, "H")
    // paddingTop: SPACING * 0.8,
    // paddingBottom: SPACING * 0.8,
  },
  CheckViewText: {
    fontSize: FONT_SIZE.NR,
    color: "#000"
  }
});

export default connect(
  ({ userSetting }) => {
    return {
      mainColor: userSetting.mainColor,
      bgColor: userSetting.bgColor,
      languge: userSetting.languge,
      themeName: userSetting.themeName
      // data: random,
    };
  },
  {
    ...userSettingAction
  }
)(userSetiingDrawerScreen);
