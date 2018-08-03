import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { connect } from 'react-redux';
import StackNavigator from './navigations/stackNavigator';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#F5FCFF',
  },
});

export default class rnGank extends Component {

  componentDidMount() {
  }
  render() {
    return (
      <View style={styles.container}>
        <StackNavigator onNavigationStateChange={(p,c)=>{
          const prevRouteName = p.routes[p.index].routeName;
          const currRouteName = c.routes[c.index].routeName;
          if(prevRouteName !== currRouteName) {
            console.log(prevRouteName,' --> ', currRouteName);
          }
        }}/>
      </View>
    );
  }
}