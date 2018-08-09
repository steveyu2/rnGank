import React, { PureComponent } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { adaptUnits, FONT_SIZE } from '../../commons/constants';
import { Avatar } from 'react-native-elements';

const avatar = require('../../images/logo.png');
const defaultDrawerBG = require('../../images/defaultDrawerBG.jpg');


class DrawerNavigatorHeader extends PureComponent{

  render() {
    const {
      mainColor,
    } = this.props;
    return (
      <View
        style={[
          styles.container,
        ]}
      >
        <Avatar
          medium
          rounded
          source={avatar}
          containerStyle={styles.avatar}
          activeOpacity={0.7}
          onPress={() => console.log("Works!")}
        />
        <View style={styles.bottomWrap}>
          <Text style={[styles.bottomText, {fontSize: FONT_SIZE.XS}]}>Pixiv Id: 45525123</Text>
        </View>
        <Image style={styles.bgImage} source={defaultDrawerBG} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: adaptUnits(330, 'H'),
    backgroundColor: 'rgba(0,0,0,0)',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  bgImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: -1,
    top: 0,
  },
  avatar:{
    marginBottom: adaptUnits(50, 'H'),
    marginLeft: adaptUnits(30, 'W'),
  },
  bottomWrap: {
    width: '100%',
    paddingVertical: adaptUnits(2, 'H'),
    paddingHorizontal: adaptUnits(10, 'W'),
    backgroundColor: 'rgba(0,0,0, 0.5)',
    opacity: 0.7,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  bottomText: {
    color: '#fff',
  }
});

export default DrawerNavigatorHeader;