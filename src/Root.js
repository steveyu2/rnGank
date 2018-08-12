import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import store from './logics/store';

const styles = StyleSheet.create({

});

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
          <App />
      </Provider>
    );
  }
}