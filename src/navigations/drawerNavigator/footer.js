import React, { Component, PureComponent } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
import { adaptUnits, FONT_SIZE } from '../../commons/constants';
import MyButton from '../../components/button';

class MyIcon extends PureComponent {
  render() {
    return (
      <Icon
        raised
        component={_props => (<MyButton {..._props} noAction onPress={()=>console.log(1)} />)}
        containerStyle={[styles.icon, {backgroundColor: "#FA8072"}]}
        size={adaptUnits(15, 'F')}
        color="#fff" // #F4A460
        type="material-community"
        name="puzzle"
        {...this.props }
        onPress={undefined}
      />
    )
  }
}

class DrawerNavigatorFooter extends Component{

  render() {
    return (
      <View style={styles.container}>
      {/* 主题 */}
      <MyIcon
        containerStyle={[styles.icon, {backgroundColor: "#FA8072"}]} // #F4A460
        name="puzzle"
        onPress={()=>console.log(1)}
      />
      {/* 设置 */}
        <MyIcon
          raised
          containerStyle={[styles.icon, {backgroundColor: "#4682B4"}]}
          name="settings"
          onPress={()=>console.log(1)}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: adaptUnits(18, 'W'),
    width: '100%',
    height: adaptUnits(100, 'H'),
    borderColor: '#ddd',
    borderTopWidth: adaptUnits(1, 'H'),
  },
  icon: {
    margin: 0,
    marginHorizontal: adaptUnits(10, 'W'),
    borderRadius: 50,
  }
});

export default DrawerNavigatorFooter;