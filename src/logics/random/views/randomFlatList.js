import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';
import immutable from 'immutable';
import FlatList from '../../../components/FlatList';
import gankRenderItems from '../../../components/gankRenderItems';
import LoadingView from '../../../components/loadingView';
import { gankio } from '../../../commons/Api';
import { RANDOM } from '../../../commons/actionTypes';
import * as randomAction from '../action';

class RandomFlatList extends Component {
  constructor(props) {
    super(props);

    this.gankRenderItems = gankRenderItems.bind(this);
    this._renderItem = this._renderItem.bind(this);
    this._onRefresh = this._onRefresh.bind(this);
    this._onEndReached = this._onEndReached.bind(this);
  }

  _keyExtractor  = (data, i) => data._id + i;

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
      refreshRandomData,
      dataGankType,
      data,
    } = this.props;

    if(data[dataGankType].data.length === 0) {
      refreshRandomData(dataGankType, RANDOM.REFRESH)
    }
  }

  _onRefresh() {
    const {
      refreshRandomData,
      dataGankType,
    } = this.props;

    refreshRandomData(dataGankType, RANDOM.REFRESH)
  }

  _onEndReached() {
    const {
      fetchRandomData,
      dataGankType,
    } = this.props;

    fetchRandomData(dataGankType)
  }

  render() {
    const {
      mainColor,
      dataGankType,
      data,
    } = this.props;

    const currentData = data[dataGankType];

    return (currentData.loaded
      ?<LoadingView fullScreen color={mainColor}/>
      :<FlatList
        style={ styles.container }
        mainColor={ mainColor }
        data={ currentData.data }
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
  ({ userSetting, random }) => {
    return {
      mainColor: userSetting.mainColor,
      data: random,
    };
  },
  {
    ...randomAction,
  }
)(RandomFlatList);