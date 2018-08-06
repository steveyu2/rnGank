import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  WebView
} from 'react-native';
import { connect } from 'react-redux';
import NavigateHeader from '../../components/navigateHeader';
import LoadingView from '../../components/loadingView';
// import * as randomAction from './logics/random/action'; 
// import * as appointTypeAction from './logics/appointType/action'; 
// import { RANDOM } from './commons/actionTypes';
// import { gankio } from './commons/Api';
// import { FONT_SIZE } from './commons/constants';

class WebViewComponent extends Component {

  static navigationOptions = ({ navigation, mainColor }) => ({
    header: (
      <NavigateHeader 
        title="WebView" 
        navigation={navigation} 
        mainColor={mainColor}
      />
    ),
  });

  constructor() {
    super();

    this.state = {
      loading: true,
      error: false,
    };

    this.setLoadingEnd = this.setLoadingEnd.bind(this);
    this.setLoadingError = this.setLoadingError.bind(this);
  }

  setLoadingEnd = () => {
    const {
    } = this;
    // debugger
    this.setState({
      loading: false,
    })
  }

  setLoadingError = () => {
    this.setState({
      loading: false,
      error: true,
    })
  }

  render() {
    const {
      mainColor,
      navigation
    } = this.props;
    const {
      loading,
      error,
    } = this.state;

    return (
      <View style={styles.container}>
        {loading && (
          <LoadingView
            text="加载中"
            style={styles.loading}
            color={mainColor}
            fullScreen
          />
        )}
        {error && (
          <LoadingView
            // _ref={this.setLoadingViewRef}
            text="加载失败"
            style={styles.loading}
            color={mainColor}
            fullScreen
          />
        )}
        <WebView
          source={{uri: 'https://github.com/facebook/react-native'}}
          onLoad={this.setLoadingEnd}
          onError={this.setLoadingError}
        />
      </View>
    );
  }
}
      
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#F5FCFF',
  },
  loading: {
    // position: "absolute",
    // top: 0, 
  },
  webViewContainer: {
    flex: 1,
  }
});

export default connect(({ userSetting })=>({
  mainColor: userSetting.mainColor.value,
}))(WebViewComponent);