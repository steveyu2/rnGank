import React, { PureComponent } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Platform,
} from 'react-native';
import { Button, Icon } from 'react-native-elements';
import {
  FONT_SIZE,
  HEADER_HEIGHT,
  MAIN_COLOR,
  adaptUnits,
} from '../commons/constants';
import MyButton from './button';


class NavigateHeader extends PureComponent{

  backBtn = ({ navigation, btnColor }) => (
    <MyButton
      onPress={() => navigation.goBack()}
      style={styles.backBtn}
      ripple={true}
    >
      <Icon
        large
        name="md-arrow-back"
        type="ionicon"
        color={btnColor}
        iconStyle={styles.backBtnIcon}
      />
    </MyButton>
  );

  render() {
    const {
      title="", //str
      backBtn = true, // boolean
      leftComponent = false, // 左侧组件
      rightComponent = false, // 左侧组件
      mainColor=MAIN_COLOR,
      btnColor="#fff",
      navigation,
    } = this.props;  

    addStyle = {
      container: {backgroundColor: mainColor},
    };

    return (
      <View style={[ styles.container, addStyle.container]}>
        <View style={styles.leftWrap}>
          {backBtn && this.backBtn({ navigation, btnColor })}
          {leftComponent && leftComponent}
        </View>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.rightWrap}>
          {rightComponent && rightComponent}
        </View>
      </View>
    );
  }
}
// 阴影
let platformContainerShadowStyles={};
if (Platform.OS === 'ios') {
  platformContainerShadowStyles = {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#A7A7AA',
  };
} else {
  platformContainerShadowStyles = {
    shadowColor: 'black',
    shadowOpacity: 0.1,
    shadowRadius: StyleSheet.hairlineWidth,
    shadowOffset: {
      height: StyleSheet.hairlineWidth,
    },
    elevation: 4,
  };
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: HEADER_HEIGHT,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    zIndex: 9,
    ...platformContainerShadowStyles,
  },
  leftWrap: {
    position: "absolute",
    left: 0,
    height: HEADER_HEIGHT,
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: "rgba(0, 0, 0, 0.4)",
  },  
  rightWrap: {
    position: "absolute",
    right: 0,
    height: HEADER_HEIGHT,
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'flex-start',
  },
  backBtn: {
    height: HEADER_HEIGHT / 1.2,
    width: HEADER_HEIGHT, 
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: FONT_SIZE.LG,
    color: "#fff",
  },
});

export default NavigateHeader;