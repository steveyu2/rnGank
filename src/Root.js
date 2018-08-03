import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { connect, Provider } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import App from './App';
import store from './logics/store';

const styles = StyleSheet.create({

});

export default class Root extends Component {

  componentDidMount() {
    // 首屏
    SplashScreen.hide();
  }
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}