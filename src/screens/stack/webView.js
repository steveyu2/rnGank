import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
// import { connect } from 'react-redux';
// import * as randomAction from './logics/random/action'; 
// import * as appointTypeAction from './logics/appointType/action'; 
// import { RANDOM } from './commons/actionTypes';
// import { gankio } from './commons/Api';
// import { FONT_SIZE } from './commons/constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  
});

class WebView extends Component {

  constructor() {
    super()
  }

  render() {

    return (
      <View style={styles.container}>
        
      </View>
    );
  }
}

export default WebView;