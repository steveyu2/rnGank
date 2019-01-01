import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View, WebView } from "react-native";
import { connect } from "react-redux";
import NavigateHeader from "~/components/navigateHeader";
import LoadingView from "~/components/loadingView";
import theme from "~/common/theme";
// import * as randomAction from './logics/random/action';
// import * as appointTypeAction from './logics/appointType/action';
// import { RANDOM } from './commons/actionTypes';
// import { gankio } from './commons/Api';
// import { FONT_SIZE } from './commons/constants';

const viewImgHtml = url => `<html lang="en"><head>    <meta charset="UTF-8">  
  <meta name="viewport" content="width=device-width, initial-scale=1" />      <style>   
       html,body {       height: 100%;  
  margin: 0;
padding: 0;          width: 100%;        }    </style></head><body>  
  <image id="img" src='${url}' width="100%"/></body></html>`;

class WebViewStack extends Component {
  static navigationOptions = ({
    navigation,
    navigation: { getParam },
    screenProps: { mainColor }
  }) => ({
    header: (
      <NavigateHeader
        title={getParam("title", "WebView")}
        navigation={navigation}
        style={[{ backgroundColor: mainColor }, theme.headerStyle]}
      />
    )
  });

  constructor() {
    super();

    this.state = {
      loading: true,
      error: false
    };

    this.setLoadingEnd = this.setLoadingEnd.bind(this);
    this.setLoadingError = this.setLoadingError.bind(this);
  }

  setLoadingEnd = () => {
    // debugger
    this.setState({
      loading: false
    });
  };

  setLoadingError = () => {
    this.setState({
      loading: false,
      error: true
    });
  };

  render() {
    const {
      mainColor,
      navigation: { getParam }
    } = this.props;
    const { loading, error } = this.state;

    const url = this.props.navigation.getParam("url", "");
    const viewImage = this.props.navigation.getParam("viewImage", false);
    let addProps = {
      source: { uri: url }
    };

    if (viewImage) {
      addProps = {
        source: { html: viewImgHtml(url) }
      };
    }

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
          onLoad={this.setLoadingEnd}
          onError={this.setLoadingError}
          {...addProps}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#F5FCFF',
  },
  loading: {
    // position: "absolute",
    // top: 0,
  },
  webViewContainer: {
    flex: 1
  }
});

export default connect(({ userSetting }) => ({
  mainColor: userSetting.mainColor
}))(WebViewStack);
