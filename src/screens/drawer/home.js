import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';

class HomeDrawer extends Component{

  static navigationOptions = ({ navigation }) => ({
    drawerLabel: '随机推荐',
    title: '随机推荐',
    // header: (
    //   <NavigateHeader 
    //     title="随机推荐" 
    //     navigation={navigation} 
    //     mainColor={mainColor}
    //   />
    // ),
    drawerIcon: ({ focused, tintColor }) => (
      <Icon
        name="md-infinite"
        type="ionicon"
        color={focused? tintColor: '#000'}
      />
    )
  });

  render() {
    const {
      mainColor,
    } = this.props;

    return (
      <View>
        <Text style={{color: mainColor}}>HomeDrawer</Text>
      </View>
    )
  }
}

export default connect(
  ({ userSetting }) => {
    return {
      mainColor: userSetting.mainColor,
    };
  }
)(HomeDrawer);