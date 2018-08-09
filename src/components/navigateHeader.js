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
import HeaderButton from './navigateHeaderButton';


class NavigateHeader extends PureComponent{

  backBtn = ({ navigation, btnColor }) => (
    <MyButton
      onPress={() => navigation.goBack()}
      style={styles.backBtn}
      ripple={true}
      ripplecolor="white"
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
      navigation = { goBack: ()=>{} },
      title="", //str
      titleAlign="left",
      backBtn = true,  
      leftComponent = false, // 左侧组件
      rightComponent = false, // 左侧组件
      mainColor = MAIN_COLOR,
      btnColor="#fff",
    } = this.props;  

    addStyle = {
      container: {backgroundColor: mainColor},
    };

    return (
      <View style={[ styles.container, addStyle.container]}>
        <View style={styles.leftWrap}>
          {backBtn && this.backBtn({ navigation, btnColor })}
          <HeaderButton name="md-menu"/>
          {leftComponent && leftComponent}
          {titleAlign === 'left' && <Text style={styles.title}>{title}</Text>}
        </View>
          {titleAlign === 'center' && <Text style={styles.title}>{title}</Text>}
        <View style={styles.rightWrap}>
          {titleAlign === 'right' && <Text style={styles.title}>{title}</Text>}
          {rightComponent && rightComponent}
          <HeaderButton/>
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
    paddingLeft: adaptUnits(10 ,'W'),
    flexDirection: 'row',
    alignItems: 'center',
  },  
  rightWrap: {
    position: "absolute",
    right: 0,
    height: HEADER_HEIGHT,
    paddingRight: adaptUnits(10 ,'W'),
    flexDirection: 'row',
    alignItems: 'center',
  },
  backBtn: {
    height: HEADER_HEIGHT / 1.2,
    width: HEADER_HEIGHT, 
    marginLeft: adaptUnits(-12 ,'W'),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: FONT_SIZE.LG,
    color: "#fff",
  },
});

export { HeaderButton };
export default NavigateHeader;