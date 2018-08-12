import React, {PureComponent} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Spinner from 'react-native-spinkit';
import { FONT_SIZE, adaptUnits } from '../commons/constants';
import LoadingView from './loadingView'

// 上拉加载状态
const PULLUPLOAD = {
    SUCCESS: 'SUCCESS',
    FAILURE: 'FAILURE',
    ING: 'ING',
    NOMORE: 'NOMORE'
};

function WrapView(props) {
  return (
    <View style={styles.wrapView}>
      {props.children}
    </View>
  )
};


/**
 * onScroll
 * @param {string} loadingKey props里上拉加载的键值
 * @param {function} callback 
 */
const onScroll = function(loadingKey, callback) {
  return function(event) {
    var loading = this.props[loadingKey];

    // 已经在加载
    if(loading === PULLUPLOAD.ING)return;

    const y = event.nativeEvent.contentOffset.y;
    const height = event.nativeEvent.layoutMeasurement.height;
    const contentHeight = event.nativeEvent.contentSize.height;
    // console.log('offsetY-->' + y);
    // console.log('height-->' + height);
    // console.log('contentHeight-->' + contentHeight);

    // 距离底部
    if(y + height >= contentHeight - 300){
        callback()
    }
  }
}
/**
 * 上拉的底部组件
 * @param {PULLUPLOAD.TYPE} state 
 */
class ScrollViewFooter extends PureComponent{

  render() {
    const {
      state,
      mainColor,
      iconColor,
      textColor,
      retry=()=>{},
    } = this.props;
    
    if(state === PULLUPLOAD.NOMORE){
      return (
        <LoadingView
          infoIconName="ios-information-circle"
          color={ mainColor }
          text="没有更多了"
          textAlign="right"
          iconColor={iconColor}
          textColor={textColor}
        />
      );
    }else if(state === PULLUPLOAD.FAILURE){
      return (
        <LoadingView
          infoIconName="ios-alert"
          color={ mainColor }
          text="加载失败"
          textAlign="right"
          btnText="重试"
          btnOnPress={retry}
          iconColor={iconColor}
          textColor={textColor}
        />
      );
    }else if(state === PULLUPLOAD.ING){
      return (
        <LoadingView 
          size={adaptUnits(25, 'F')}
          style={ styles.loadingWrap }
          color={ mainColor }
          loadingType="2"
        />
      );
    }
    return <LoadingView size={adaptUnits(25, 'F')}
      style={ styles.loadingWrap }
      color="rgba(255,255,255,0)"
      loadingType="2"
    />;
  }
}

const styles = StyleSheet.create({
  loadingWrap: {
    paddingTop: adaptUnits(20, 'H'),
    paddingBottom: adaptUnits(10, 'H'),
  },
  normalView: {
    height: adaptUnits(100, 'H'),
  },
});

export {
    ScrollViewFooter,
    PULLUPLOAD,
    onScroll,
};
