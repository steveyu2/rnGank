import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { connect } from 'react-redux';
import * as randomAction from './logics/random/action'; 
import { RANDOM } from './commons/actionTypes';
import { gankio } from './commons/Api';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  
});

class rnGank extends Component {

  componentDidMount() {
    const {
      fetchRandomData,
    } = this.props;
    fetchRandomData(gankio.type.ANDROID);
  }
  render() {
    return (
      <View style={styles.container}>
      </View>
    );
  }
}

export default connect(
  state => {
    return {
      ...state
    };
  },
  {
    ...randomAction,
  }
)(rnGank);