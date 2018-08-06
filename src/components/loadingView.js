import React, { PureComponent } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import Spinkit from 'react-native-spinkit';
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
      style,
      loadingStyle,
      text,
      fullScreen=false,
      color="#000",
      textColor="#444",
      size=40,
      _ref=()=>{},
    } = this.props;
    let {
      type="1",
    } = this.props;

    // 附加样式
    const addStyle = {
      container: {},
      loadingContainer: {},
    }

    type = parseInt(type);

    if(fullScreen) {
      addStyle.container = {
        height: '100%',
      };
      addStyle.loadingContainer = {
        marginTop: adaptUnits(-300 ,'H'),
      };
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
        <View
          style={[
            styles.loadingContainer,
            addStyle.loadingContainer,
            loadingStyle,
            ]}
        >
          <Spinkit
            color={parseColorToRgba(color, 1, {R: -33, G: -15, B: 0})}
            size={size}
            type={this.loadingType[type - 1]}
          />
          {text && (
            <Text
              style={[
                styles.loadingText,
                {color: textColor}
              ]}
            >
                {text}
            </Text>
          )}
        </View>
      </Animatable.View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  loadingContainer: {
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  loadingText: {
    marginTop: adaptUnits(15 ,'H'),
    fontSize: FONT_SIZE.SM,
  }
});

export default LoadingView;
