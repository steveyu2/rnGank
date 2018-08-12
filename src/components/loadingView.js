import React, { PureComponent } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import Spinkit from 'react-native-spinkit';
import { Icon } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import { adaptUnits, FONT_SIZE } from '../commons/constants';
import { parseColorToRgba } from '../commons/util';
import Button from '../components/button';

class LoadingView extends PureComponent{

  loadingType = `
    Bounce,
    Wave,
    ThreeBounce,
    Circle,
    9CubeGrid,
    WanderingCubes,
    Pulse,
    ChasingDots,
    FadingCircleAlt`.replace(/[\r\n\s]/gi,'').split(',');

  render() {
    const {
      style={},
      loadingStyle={},
      infoIconName,
      infoIconType='ionicon',
      fullScreen=false,
      text,
      textColor='#444',
      textSize = FONT_SIZE.SM,
      textAlign = 'bottom', // right
      btnText,
      btnTextColor = '#fff',
      btnBackgroundColor,
      btnOnPress = () => {}, 
      _ref=()=>{},
    } = this.props;

    let {
      loadingType="1",
      color='#000',
      iconColor = color,
      size = adaptUnits(40, 'F'),
    } = this.props;
    let compView;
    // const iconColor = color;

    loadingType = parseInt(loadingType);

    // 附加样式
    const addStyle = {
      container: {  },
      loadingContainer: {
        flexDirection: textAlign === 'bottom'? 'column': 'row',
      },
    }

    // 全屏
    if(fullScreen) {
      addStyle.container = { height: '100%' };
      addStyle.loadingContainer = {
        ...addStyle.loadingContainer,
        marginTop: adaptUnits(-300 ,'H'),
      };
    }

    if(color.length <= 7) {
      color = parseColorToRgba(color, 1, {R: -33, G: -15, B: 0});
    }

    if(!infoIconName) {
      compView = (
        <View
          style={[
            styles.loadingContainer,
            addStyle.loadingContainer,
            loadingStyle,
          ]}
        >
          <Spinkit
            color={color}
            size={size}
            type={this.loadingType[loadingType - 1]}
          />
          {text && (
            <Text
            style={[
              styles.loadingText,
              {color: textColor, fontSize: textSize}
            ]}
            >{text}</Text>
          )}
        </View>);
    } else {
      size = adaptUnits(18, 'F'),
      compView = (
        <View
          style={[
          styles.infoContainer,
          addStyle.loadingContainer,
          loadingStyle,
          ]}
        >
          <Icon
            size={size}
            color={iconColor}
            type={infoIconType}
            name={infoIconName}
          />
          {text && (
            <Text
            style={[
              styles.infoText,
              {color: textColor, fontSize: textSize}
            ]}
            >{text}</Text>
          )}
          {btnText && (
            <Button style={[styles.btnWrap, {backgroundColor: btnBackgroundColor || color,}]} onPress={btnOnPress}>
              <Text
                style={[
                  {color: btnTextColor, fontSize: textSize}
                ]}
              >
                {btnText}
              </Text>
            </Button>
          )}
        </View>);
    }

    return (
      <Animatable.View 
        style={[
          styles.container,
          addStyle.container,
          style
        ]}
        ref={_ref}
      >
        { compView }
      </Animatable.View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255, 0)',
  },
  loadingContainer: {
    alignItems: 'center',
  },
  loadingText: {
    marginTop: adaptUnits(15 ,'H'),
    paddingBottom: adaptUnits(25 ,'W'),
  },
  infoContainer: {
    // flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: adaptUnits(25 ,'W'),
    paddingBottom: adaptUnits(25 ,'W'),
  },
  infoText: {
    marginLeft: adaptUnits(10 ,'W'),
  },
  btnWrap: {
    marginLeft: adaptUnits(10 ,'W'),
    paddingLeft: adaptUnits(10 ,'W'),
    paddingRight: adaptUnits(10 ,'W'),
    paddingTop: adaptUnits(5 ,'W'),
    paddingBottom: adaptUnits(5 ,'W'),
    borderRadius: 3,
  }
});

export default LoadingView;
