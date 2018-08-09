import React, { PureComponent } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Platform,
} from 'react-native';
import MyButton from './button';
import {
  HEADER_HEIGHT,
} from '../commons/constants';
import { Icon } from 'react-native-elements';

class HeaderButton extends PureComponent {

  render() {
    const {
      size=26,
      name = 'md-search',
      type = 'ionicon',
      onPress = () => {},
      ripple = true,
      ripplecolor = 'white',
      large = true,
      btnColor = '#fff',
      style,
    } = this.props;

    return (
      <MyButton
        onPress={onPress}
        style={[styles.button, style]}
        ripple={ripple}
        ripplecolor={ripplecolor}
      >
        <Icon
          name={name}
          type={type}
          size={size}
          color={btnColor}
        />
      </MyButton>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    height: HEADER_HEIGHT / 1.5,
    width: HEADER_HEIGHT / 1.5, 
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
});

export default HeaderButton;