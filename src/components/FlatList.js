import React, { Component } from 'react';
import { ScrollView, FlatList, RefreshControl } from 'react-native';
import { ScrollViewFooter, PULLUPLOAD } from './pullUploading';
import theme from '../commons/theme';

class MyFlatList extends Component {

  constructor() {
    super();
    this.ScrollViewFooter = this.ScrollViewFooter.bind(this);
  }

  renderScrollComponent (props) {
    // if (this._isNestedWithSameOrientation()) {
    //  return <View {...props} />;
    // } else if (props.onRefresh) {
    if (props.onRefresh) {
      // invariant(
      //  typeof props.refreshing === 'boolean',
      //  '`refreshing` prop must be set as a boolean in order to use `onRefresh`, but got `' +
      //  JSON.stringify(props.refreshing) +
      //  '`',
      // );
      return (
        <ScrollView
          {...props}
          refreshControl={
            <RefreshControl
              progressBackgroundColor={ props.progressBackgroundColor }
              colors={[ props.refreshComponentColor ]}
              refreshing={ props.refreshing }
              onRefresh={ props.onRefresh }
              progressViewOffset={ props.progressViewOffset }
            />
          }
        />
      );
    } else {
      return <ScrollView {...props} />;
    }
  }


  // infoIconName="ios-alert"
  // color={theme.blackText.color || mainColor}
  // iconColor={theme.lightText.color || mainColor}
  // btnBackgroundColor={theme.blackText.color || mainColor}
  // text="加载失败了"
  // textAlign="left"
  // btnText="重试"
  // textColor={theme.lightText.color || '#444'}
  // btnOnPress={this._onEndReached}

  ScrollViewFooter (props={}) {
    const {
      data,
      mainColor,
      onEndReached,
    } = this.props;
    const state = this.props.pullUpLoading;
    return (
      <ScrollViewFooter 
        state={ state }
        mainColor={theme.blackText.color || mainColor}
        retry={onEndReached}
        iconColor={theme.lightText.color || mainColor}
        textColor={theme.lightText.color || '#444'}
        {...props}
      />
    )
  };
  
  render() {
    const {
      // style,
      // data,
      // renderItem,
      // keyExtractor,
      // onEndReached
      onRefresh,
      refreshing,
      mainColor,
    } = this.props;
    
    return (
      <FlatList
        // style={ style }
        // data={ data }
        // renderItem={ renderItem }
        // keyExtractor={ keyExtractor }
        // onEndReached={ onEndReached }
        // refreshing={ refreshing }
        // onRefresh={ onRefresh }
        renderScrollComponent={this.renderScrollComponent}
        refreshComponentColor={mainColor}
        onEndReachedThreshold={ 0.02 }
        ListFooterComponent={this.ScrollViewFooter}
        {...this.props}
      />
    );
  }
}

export default MyFlatList;