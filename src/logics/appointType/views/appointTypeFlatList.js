import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';
import Immutable from 'immutable';
import FlatList from '../../../components/FlatList';
import gankRenderItems from '../../../components/gankRenderItems';
import LoadingView from '../../../components/loadingView';
import { gankio } from '../../../commons/Api';
import { APPOINT_TYPE } from '../../../commons/actionTypes';
import theme from '../../../commons/theme';
import * as appointTypeAction from '../action';
import { propsDiff } from '../../selector';

class AppointTypeFlatList extends Component {
  constructor(props) {
    super(props);

    this.gankRenderItems = gankRenderItems.bind(this);
    this._renderItem = this._renderItem.bind(this);
    this._onRefresh = this._onRefresh.bind(this);
    this._onEndReached = this._onEndReached.bind(this);
  }

  // shouldComponentUpdate(nextProps) {
  //   return propsDiff(this.props, nextProps)
  // }

  _keyExtractor  = (data, i) => data._id;

  _renderItem ({item , i}) {
    const {
      dataType,
      mainColor,
      navigation,
    } = this.props;

    const type = Object.keys(gankio.type).filter(v => gankio.type[v] === item.type)[0];
    if(type){
      const Item = this.gankRenderItems[type];
      return <Item data={item} mainColor={mainColor} navigation={navigation}/>
    } else {
      return false;
    }
    // console.log('Item:', Item)
    // console.log('dataType:', dataType)
  }

  componentWillMount() {
    const {
      refreshAppointTypeData,
      dataGankType,
      data,
    } = this.props;

    if(data[dataGankType].data.length === 0) {
      refreshAppointTypeData(dataGankType, APPOINT_TYPE.REFRESH)
    }
  }

  _onRefresh() {
    const {
      refreshAppointTypeData,
      dataGankType,
    } = this.props;

    refreshAppointTypeData(dataGankType, APPOINT_TYPE.REFRESH)
  }

  _onEndReached() {
    const {
      fetchAppointTypeData,
      dataGankType,
    } = this.props;

    fetchAppointTypeData(dataGankType)
  }

  render() {
    const {
      mainColor,
      dataGankType,
      data,
    } = this.props;
    
    const currentData = data[dataGankType];
    const extraData = {
      data: [...currentData.data],
      pullUpLoading: currentData.loading,
      mainColor,
    }

    return (!currentData.loaded
      ?currentData.error
      ?<LoadingView
        fullScreen
        infoIconName="ios-alert"
        color={theme.blackText.color || mainColor}
        iconColor={theme.lightText.color || mainColor}
        btnBackgroundColor={theme.blackText.color || mainColor}
        text="加载失败了"
        textAlign="left"
        btnText="重试"
        textColor={theme.lightText.color || '#444'}
        btnOnPress={this._onEndReached}
      />
      :<LoadingView fullScreen color={theme.lightText.color || mainColor}/>
      :<FlatList
        style={ styles.container }
        mainColor={ mainColor }
        data={ extraData.data }
        extraData={ extraData }
        renderItem={ this._renderItem }
        keyExtractor={ this._keyExtractor }
        onEndReached={ this._onEndReached }
        onRefresh={ this._onRefresh }
        refreshing={ currentData.refreshLoading }
        pullUpLoading={ currentData.loading }
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
});

export default connect(
  ({ userSetting, appointType }) => {
    return {
      mainColor: userSetting.mainColor,
      data: appointType,
    };
  },
  {
    ...appointTypeAction,
  }
)(AppointTypeFlatList);