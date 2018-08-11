import React, { PureComponent } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import Spinkit from 'react-native-spinkit';
import { Icon } from 'react-native-elements';
import { adaptUnits, FONT_SIZE } from '../commons/constants';
import { parseColorToRgba } from '../commons/util';
import * as Animatable from 'react-native-animatable';

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
      text,
      fullScreen=false,
      textColor='#444',
      textSize= FONT_SIZE.SM,
      _ref=()=>{},
      infoIconName,
      infoIconType='ionicon',
    } = this.props;
    let {
      loadingType="1",
      color='#000',
      size = adaptUnits(40, 'F'),
    } = this.props;
    let compView;

    loadingType = parseInt(loadingType);

    // 附加样式
    const addStyle = {
      container: {},
      loadingContainer: {},
    }

    // 全屏
    if(fullScreen) {
      addStyle.container = {
        height: '100%',
      };
      addStyle.loadingContainer = {
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
            color={color}
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
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: adaptUnits(25 ,'W'),
    paddingBottom: adaptUnits(25 ,'W'),
  },
  infoText: {
    marginLeft: adaptUnits(10 ,'W'),
  },
});

export default LoadingView;
