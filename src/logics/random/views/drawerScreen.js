import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
// import Immutable from 'immutable';
// import { FONT_SIZE, adaptUnits } from '../../../commons/constants';
import i18n from '../../../commons/i18n';
import theme from '../../../commons/theme';
import ScrollableTabView from '../../../components/ScrollableTabView';
import DrawerNavigateHeader from '../../../components/drawerNavigateHeader';
import { gankio } from '../../../commons/Api';
import RandomFlatList from './randomFlatList';
import { propsDiff } from '../../selector';

class RandomDrawer extends Component{

  static navigationOptions = ({ navigation, screenProps: {i18n} }) => ({
    drawerLabel: i18n.randomRecommendation,
    drawerIcon: ({ focused, tintColor }) => (
      <Icon
        name="md-infinite"
        type="ionicon"
        color={focused? tintColor: '#000'}
      />
    )
  });

  constructor() {
    super();

    // i18n -> gankio.type
    this.dataType = {
      all: 'ALL',
      welfare: 'FULI',
      android: 'ANDROID',
      ios: 'IOS',
      leisureVideo: 'LEISUREVIDEO',
      expand: 'EXPAND',
      web: 'WEB',
      blindRecommend: 'BLINDRECOMMEND',
      app: 'APP',
    };
    this.state = {
      TabTitles: Object.keys(this.dataType),
    };
  }

  // shouldComponentUpdate(nextProps) {
  //   return propsDiff(this.props, nextProps)
  // }

  tabContent() {
    const {
      TabTitles,
    } = this.state;
    const {
      navigation,
    } = this.props;

    return TabTitles.map((v, i) => {
      return (
        <RandomFlatList 
          key={i}
          dataType={this.dataType[v]}
          dataGankType={gankio.type[this.dataType[v]]}
          tabLabel={i18n[v]}
          navigation={navigation}
        />
      );
    });
  }

  render() {
    const {
      mainColor,
      bgColor,
      navigation,
    } = this.props;

    return (
      <View style={[styles.container, {backgroundColor: bgColor}, theme.container]}>
        <DrawerNavigateHeader 
          title={i18n.randomRecommendation}
          navigation={navigation}
          mainColor={theme.container.backgroundColor || mainColor}
        />
        <ScrollableTabView
          style={styles.tabView}
          mainColor={mainColor} 
        >
          {this.tabContent()}
        </ScrollableTabView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabView: {
    backgroundColor: 'transparent',
  },
});

export default connect(
  ({ userSetting }) => {
    return {
      mainColor: userSetting.mainColor,
      bgColor: userSetting.bgColor,
      // data: random,
    };
  }
)(RandomDrawer);