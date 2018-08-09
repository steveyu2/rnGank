import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
import { adaptUnits, FONT_SIZE } from '../../commons/constants';
import MyButton from '../../components/button';

class DrawerNavigatorFooter extends Component{

  render() {
    return (
      <View style={styles.container}>
      {/* 主题 */}
      <Icon
        raised
        containerStyle={styles.icon}
        size={adaptUnits(15, 'F')}
        color="#FA8072" // #F4A460
        type="material-community"
        name="puzzle"
        underlayColor="#eee"
        onPress={()=>console.log(1)}
      />
      {/* 设置 */}
        <Icon
          raised
          containerStyle={styles.icon}
          size={adaptUnits(15, 'F')}
          color="#4682B4"
          type="material-community"
          name="settings"
          underlayColor="#eee"
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