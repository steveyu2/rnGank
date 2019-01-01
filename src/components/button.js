import React, { Component } from "react";
import {
  StyleSheet,
  Image,
  TouchableHighlight,
  View,
  TouchableNativeFeedback,
  Platform
} from "react-native";

class Button extends Component {
  render() {
    const {
      style = {},
      children = [<View />],
      noAction = false, // 是否无点击反应  不显示点击后透明, 点击后背景色
      disabled = false, // 点击后不执行点击事件
      ripple = false, // 涟漪是否渲染到视图的范围之外
      ripplecolor = "black", // 涟漪状的背景色  black or white
      nativeUnderlayColor = ripplecolor === "black"
        ? "rgba(0,0,0,0.3)"
        : "rgba(255,255,255,255.3)"
    } = this.props;
    let {
      onPress = () => {},
      underlayColor = "rgba(0,0,0,0.1)", // TouchableHighlight 点击后背景色
      activeOpacity = 0.8 // TouchableHighlight 点击后透明程度
    } = this.props;
    let component;

    onPress = disabled ? () => {} : onPress;
    underlayColor = noAction ? false : underlayColor;
    activeOpacity = noAction ? 1 : activeOpacity;

    if (Platform.OS === "android" && Platform.Version > 21 && !noAction) {
      component = (
        <TouchableNativeFeedback
          background={TouchableNativeFeedback.Ripple(
            nativeUnderlayColor,
            ripple
          )}
          onPress={onPress}
        >
          <View style={style}>{children}</View>
        </TouchableNativeFeedback>
      );
    } else {
      component = (
        <TouchableHighlight
          underlayColor={!noAction ? underlayColor : null}
          activeOpacity={activeOpacity}
          onPress={onPress}
        >
          <View style={style}>{children}</View>
        </TouchableHighlight>
      );
    }
    return component;
  }
}

export default Button;
